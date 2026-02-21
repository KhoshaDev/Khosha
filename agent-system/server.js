import 'node:process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { EventEmitter } from 'events';
import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import { runOrchestrator } from './orchestrator.js';

// Load .env
try {
  const env = readFileSync('.env', 'utf8');
  for (const line of env.split('\n')) {
    const [k, ...v] = line.split('=');
    if (k && v.length && !process.env[k.trim()]) {
      process.env[k.trim()] = v.join('=').trim();
    }
  }
} catch {}

import { PRICING, calcCost, INR_RATE } from './pricing.js';

// ── History persistence ────────────────────────────────────────────────────

const HISTORY_FILE = './history.json';

function loadHistory() {
  try {
    return JSON.parse(readFileSync(HISTORY_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveToHistory(run) {
  const history = loadHistory();
  history.unshift({
    runId:        run.runId,
    goal:         run.goal,
    project_id:   run.projectId,
    status:       run.status,
    startedAt:    run.startedAt,
    completedAt:  run.completedAt,
    agentCount:   run.agents.length,
    usage:        run.usage,
    report:       run.report ? run.report.slice(0, 2000) : null,
  });
  writeFileSync(HISTORY_FILE, JSON.stringify(history.slice(0, 100), null, 2));
}

async function syncRunToKMS(run) {
  try {
    await fetch('http://127.0.0.1:8788/agent-runs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id:                   run.runId,
        goal:                 run.goal,
        project_id:           run.projectId || null,
        status:               run.status,
        started_at:           run.startedAt,
        completed_at:         run.completedAt,
        agent_count:          run.agents.length,
        total_cost_usd:       run.usage.total_cost,
        total_input_tokens:   run.usage.total_input_tokens,
        total_output_tokens:  run.usage.total_output_tokens,
        report:               run.report ? run.report.slice(0, 2000) : null,
        created_at:           new Date().toISOString(),
      }),
    });
  } catch (e) {
    console.error('[KMS sync]', e.message);
  }
}

// ── In-memory run store ────────────────────────────────────────────────────

const runs = new Map();
const approvalRequests = new Map(); // key: `${runId}:${requestId}` → Promise resolver
let runSeq = 0;

function createRun(goal, projectId = null) {
  const runId = `run-${Date.now()}-${++runSeq}`;
  const emitter = new EventEmitter();
  emitter.setMaxListeners(50);
  runs.set(runId, {
    runId, goal, projectId, status: 'running',
    startedAt: new Date().toISOString(),
    completedAt: null, report: null,
    agents: [], events: [],
    usage: {
      total_input_tokens:  0,
      total_output_tokens: 0,
      total_cost:          0,
      by_model:            {},
    },
    emitter,
  });
  return runId;
}

function emit(runId, event) {
  const run = runs.get(runId);
  if (!run) return;
  const stamped = { ...event, ts: Date.now() };
  run.events.push(stamped);

  // Aggregate token usage
  if (event.type === 'token_usage') {
    const { model, input_tokens, output_tokens, cost } = event;
    run.usage.total_input_tokens  += input_tokens;
    run.usage.total_output_tokens += output_tokens;
    run.usage.total_cost          += cost;
    if (!run.usage.by_model[model]) {
      run.usage.by_model[model] = { input_tokens: 0, output_tokens: 0, cost: 0 };
    }
    run.usage.by_model[model].input_tokens  += input_tokens;
    run.usage.by_model[model].output_tokens += output_tokens;
    run.usage.by_model[model].cost          += cost;

    // Emit a live usage_update so the UI can update totals in real-time
    const update = {
      type: 'usage_update',
      ts: Date.now(),
      total_input_tokens:  run.usage.total_input_tokens,
      total_output_tokens: run.usage.total_output_tokens,
      total_cost:          run.usage.total_cost,
    };
    run.events.push(update);
    run.emitter.emit('event', update);
  }

  if (event.type === 'run_complete') {
    run.status = 'complete';
    run.completedAt = new Date().toISOString();
    run.report = event.report;
    saveToHistory(run);
    syncRunToKMS(run);
  }
  if (event.type === 'error') {
    run.status = 'error';
    run.completedAt = new Date().toISOString();
    saveToHistory(run);
    syncRunToKMS(run);
  }
  if (event.type === 'agent_spawned') {
    run.agents.push({
      agentId: event.agentId, role: event.role,
      task: event.task, status: 'running',
      label: event.label,
    });
  }
  if (event.type === 'agent_complete') {
    const agent = run.agents.find(a => a.agentId === event.agentId);
    if (agent) agent.status = 'complete';
  }

  run.emitter.emit('event', stamped);
}

// ── Approval request mechanism ─────────────────────────────────────────────

function makeRequestApproval(runId) {
  return function requestApproval(data) {
    return new Promise((resolve) => {
      const requestId = `req-${Date.now()}`;
      approvalRequests.set(`${runId}:${requestId}`, resolve);
      emit(runId, { type: 'complexity_approval_needed', requestId, ...data });

      // Auto-resolve with Haiku after 10 minutes if user doesn't respond
      setTimeout(() => {
        if (approvalRequests.has(`${runId}:${requestId}`)) {
          approvalRequests.delete(`${runId}:${requestId}`);
          emit(runId, { type: 'approval_timeout', requestId });
          resolve('low');
        }
      }, 10 * 60 * 1000);
    });
  };
}

// ── Express app ────────────────────────────────────────────────────────────

const app = express();
const PORT = 5001;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/config', (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  res.json({ configured: !!(key && key !== 'your_api_key_here'), pricing: PRICING, inr_rate: INR_RATE });
});

app.post('/runs', async (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key || key === 'your_api_key_here') {
    return res.status(400).json({ error: 'ANTHROPIC_API_KEY not configured.' });
  }
  const { goal, forceComplexity, priorContext, projectId } = req.body;
  if (!goal?.trim()) return res.status(400).json({ error: 'goal is required' });

  const runId = createRun(goal.trim(), projectId || null);
  res.json({ runId });

  const client = new Anthropic({ apiKey: key });
  runOrchestrator({
    client, runId,
    goal: goal.trim(),
    forceComplexity: forceComplexity || null,
    priorContext: priorContext || null,
    requestApproval: makeRequestApproval(runId),
    emit: (ev) => emit(runId, ev),
  })
    .catch(e => {
      emit(runId, { type: 'error', message: e.message });
    });
});

app.get('/stream/:runId', (req, res) => {
  const run = runs.get(req.params.runId);
  if (!run) return res.status(404).json({ error: 'Run not found' });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const send = (ev) => res.write(`data: ${JSON.stringify(ev)}\n\n`);

  for (const ev of run.events) send(ev);

  if (run.status !== 'running') { res.end(); return; }

  run.emitter.on('event', send);
  const keepalive = setInterval(() => res.write(':keepalive\n\n'), 20000);
  req.on('close', () => { run.emitter.off('event', send); clearInterval(keepalive); });
});

app.get('/runs/:runId', (req, res) => {
  const run = runs.get(req.params.runId);
  if (!run) return res.status(404).json({ error: 'Not found' });
  const { emitter, ...data } = run;
  res.json(data);
});

// In-memory runs (active session)
app.get('/runs', (req, res) => {
  const list = [...runs.values()]
    .sort((a, b) => b.startedAt.localeCompare(a.startedAt))
    .slice(0, 20)
    .map(({ emitter, events, ...r }) => r);
  res.json(list);
});

// Model upgrade approval
app.post('/runs/:runId/approve/:requestId', (req, res) => {
  const key = `${req.params.runId}:${req.params.requestId}`;
  const resolver = approvalRequests.get(key);
  if (!resolver) return res.status(404).json({ error: 'Not found or already resolved' });
  const { complexity } = req.body;
  if (!['low', 'medium', 'high'].includes(complexity)) {
    return res.status(400).json({ error: 'Invalid complexity' });
  }
  approvalRequests.delete(key);
  resolver(complexity);
  res.json({ ok: true });
});

// Persistent history (survives restarts)
app.get('/history', (req, res) => {
  res.json(loadHistory());
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Khosha Agent System running on http://127.0.0.1:${PORT}`);
});
