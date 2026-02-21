import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { createIssue, listIssues } from './github.js';
import { createClient } from '@libsql/client';

const app = express();
app.use(cors());
app.use(express.json());

const dataDir = path.resolve('data');
fs.mkdirSync(dataDir, { recursive: true });
const db = new Database(path.join(dataDir, 'keith_pm.db'));
db.exec(fs.readFileSync(path.resolve('schema.sql'), 'utf8'));

const tursoUrl = process.env.TURSO_DATABASE_URL || process.env.TURSO_URL;
const tursoToken = process.env.TURSO_AUTH_TOKEN;
const turso = (tursoUrl && tursoToken) ? createClient({ url: tursoUrl, authToken: tursoToken }) : null;

// Lightweight migrations for existing DBs.
const taskColumns = db.prepare('PRAGMA table_info(tasks)').all().map((c) => c.name);
if (!taskColumns.includes('github_issue_number')) {
  db.exec('ALTER TABLE tasks ADD COLUMN github_issue_number INTEGER');
}
if (!taskColumns.includes('github_issue_url')) {
  db.exec('ALTER TABLE tasks ADD COLUMN github_issue_url TEXT');
}

const now = () => new Date().toISOString();
const id = (p) => `${p}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

function getGithubConfig() {
  return db.prepare('SELECT * FROM integrations_github WHERE enabled=1 ORDER BY rowid DESC LIMIT 1').get();
}

function keywordSet(text) {
  return new Set((text || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
}

app.get('/health', (_req, res) => res.json({ ok: true, tursoConfigured: Boolean(turso) }));

app.get('/turso/health', async (_req, res) => {
  try {
    if (!turso) return res.status(400).json({ ok: false, error: 'Turso not configured (TURSO_DATABASE_URL/TURSO_AUTH_TOKEN)' });
    const ping = await turso.execute('SELECT 1 as ok');
    return res.json({ ok: true, rows: ping.rows });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('/projects', (_req, res) => res.json(db.prepare('SELECT * FROM projects ORDER BY updated_at DESC').all()));
app.post('/projects', (req, res) => {
  const x = { id: id('proj'), name: req.body.name, status: req.body.status || 'planning', owner: req.body.owner || 'Keith Anderson', created_at: now(), updated_at: now() };
  db.prepare('INSERT INTO projects VALUES (@id,@name,@status,@owner,@created_at,@updated_at)').run(x);
  res.json(x);
});

app.get('/projects/:projectId/tasks', (req, res) => res.json(db.prepare('SELECT * FROM tasks WHERE project_id=? ORDER BY updated_at DESC').all(req.params.projectId)));
app.post('/projects/:projectId/tasks', (req, res) => {
  const t = {
    id: id('task'),
    project_id: req.params.projectId,
    title: req.body.title,
    status: req.body.status || 'todo',
    assignee: req.body.assignee || null,
    approved: 0,
    github_issue_number: null,
    github_issue_url: null,
    created_at: now(),
    updated_at: now()
  };
  db.prepare(`INSERT INTO tasks (
    id, project_id, title, status, assignee, approved,
    github_issue_number, github_issue_url, created_at, updated_at
  ) VALUES (
    @id, @project_id, @title, @status, @assignee, @approved,
    @github_issue_number, @github_issue_url, @created_at, @updated_at
  )`).run(t);
  res.json(t);
});
app.post('/tasks/:taskId/approve', (req, res) => {
  db.prepare('UPDATE tasks SET approved=1, updated_at=? WHERE id=?').run(now(), req.params.taskId);
  res.json({ ok: true });
});
app.post('/tasks/:taskId/assign', (req, res) => {
  db.prepare('UPDATE tasks SET assignee=?, updated_at=? WHERE id=?').run(req.body.assignee || null, now(), req.params.taskId);
  res.json({ ok: true });
});
app.post('/tasks/:taskId/status', (req, res) => {
  db.prepare('UPDATE tasks SET status=?, updated_at=? WHERE id=?').run(req.body.status || 'todo', now(), req.params.taskId);
  res.json({ ok: true });
});

app.get('/tasks/:taskId/subtasks', (req, res) => res.json(db.prepare('SELECT * FROM subtasks WHERE task_id=?').all(req.params.taskId)));
app.post('/tasks/:taskId/subtasks', (req, res) => {
  const s = { id: id('sub'), task_id: req.params.taskId, title: req.body.title, done: 0, created_at: now() };
  db.prepare('INSERT INTO subtasks VALUES (@id,@task_id,@title,@done,@created_at)').run(s);
  res.json(s);
});

app.get('/comments', (req, res) => res.json(db.prepare('SELECT * FROM comments ORDER BY created_at DESC LIMIT 300').all()));
app.post('/comments', (req, res) => {
  const c = { id: id('com'), project_id: req.body.project_id || null, task_id: req.body.task_id || null, author: req.body.author || 'Agent', body: req.body.body, created_at: now() };
  db.prepare('INSERT INTO comments VALUES (@id,@project_id,@task_id,@author,@body,@created_at)').run(c);
  res.json(c);
});

app.get('/chat', (req, res) => res.json(db.prepare('SELECT * FROM chats ORDER BY created_at DESC LIMIT 300').all()));
app.post('/chat', (req, res) => {
  const c = { id: id('chat'), agent: req.body.agent || 'Keith Anderson', message: req.body.message, created_at: now() };
  db.prepare('INSERT INTO chats VALUES (@id,@agent,@message,@created_at)').run(c);
  res.json(c);
});

app.get('/resources', (_req, res) => res.json(db.prepare('SELECT * FROM resources').all()));
app.post('/resources', (req, res) => {
  const r = { id: id('res'), name: req.body.name, role: req.body.role, type: req.body.type || 'agent', start_date: req.body.start_date || null, job_description: req.body.job_description || null };
  db.prepare('INSERT INTO resources VALUES (@id,@name,@role,@type,@start_date,@job_description)').run(r);
  res.json(r);
});

app.get('/documents', (_req, res) => res.json(db.prepare('SELECT * FROM documents').all()));
app.post('/documents', (req, res) => {
  const d = { id: id('doc'), title: req.body.title, path: req.body.path, created_at: now() };
  db.prepare('INSERT INTO documents VALUES (@id,@title,@path,@created_at)').run(d);
  res.json(d);
});

app.post('/integrations/github/config', (req, res) => {
  const { owner, repo, token_env_var } = req.body || {};
  if (!owner || !repo || !token_env_var) {
    return res.status(400).json({ error: 'owner, repo, and token_env_var are required' });
  }
  db.prepare('UPDATE integrations_github SET enabled=0').run();
  const cfg = { id: id('gh'), owner, repo, token_env_var, enabled: 1 };
  db.prepare('INSERT INTO integrations_github (id, owner, repo, token_env_var, enabled) VALUES (@id,@owner,@repo,@token_env_var,@enabled)').run(cfg);
  return res.json({ ok: true, config: { owner, repo, token_env_var, enabled: 1 } });
});

app.post('/sync/github/export-approved', async (_req, res) => {
  try {
    const cfg = getGithubConfig();
    if (!cfg) {
      return res.status(400).json({ error: 'GitHub integration not configured' });
    }

    const tasks = db.prepare(`SELECT t.*, p.name as project_name
      FROM tasks t
      JOIN projects p ON p.id = t.project_id
      WHERE t.approved=1 AND t.github_issue_number IS NULL
      ORDER BY t.updated_at DESC`).all();

    const updateStmt = db.prepare('UPDATE tasks SET github_issue_number=?, github_issue_url=?, updated_at=? WHERE id=?');
    const created = [];

    for (const t of tasks) {
      const issue = await createIssue({
        owner: cfg.owner,
        repo: cfg.repo,
        tokenEnvVar: cfg.token_env_var,
        title: t.title,
        body: `PM Task ID: ${t.id}\nProject: ${t.project_name}\nStatus: ${t.status}`
      });
      updateStmt.run(issue.number, issue.html_url, now(), t.id);
      created.push({ task_id: t.id, issue_number: issue.number, issue_url: issue.html_url });
    }

    return res.json({ ok: true, exported_count: created.length, created });
  } catch (error) {
    return res.status(500).json({ error: String(error.message || error) });
  }
});

app.post('/sync/github/import-status', async (_req, res) => {
  try {
    const cfg = getGithubConfig();
    if (!cfg) {
      return res.status(400).json({ error: 'GitHub integration not configured' });
    }

    const issues = await listIssues({ owner: cfg.owner, repo: cfg.repo, tokenEnvVar: cfg.token_env_var, state: 'all' });
    const issueMap = new Map(issues.filter((i) => !i.pull_request).map((i) => [i.number, i]));

    const linkedTasks = db.prepare('SELECT id, status, github_issue_number FROM tasks WHERE github_issue_number IS NOT NULL').all();
    const updateStatus = db.prepare('UPDATE tasks SET status=?, updated_at=? WHERE id=?');
    let updatedCount = 0;

    for (const task of linkedTasks) {
      const issue = issueMap.get(task.github_issue_number);
      if (!issue) continue;
      const nextStatus = issue.state === 'closed' ? 'done' : task.status;
      if (nextStatus !== task.status) {
        updateStatus.run(nextStatus, now(), task.id);
        updatedCount += 1;
      }
    }

    return res.json({ ok: true, checked: linkedTasks.length, updated: updatedCount });
  } catch (error) {
    return res.status(500).json({ error: String(error.message || error) });
  }
});

app.post('/tasks/:taskId/suggest-assignee', (req, res) => {
  const task = db.prepare('SELECT * FROM tasks WHERE id=?').get(req.params.taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const comments = db.prepare('SELECT body FROM comments WHERE task_id=? ORDER BY created_at DESC LIMIT 50').all(task.id);
  const text = `${task.title} ${(comments || []).map((c) => c.body).join(' ')}`.toLowerCase();
  const textKeywords = keywordSet(text);

  const resources = db.prepare('SELECT * FROM resources').all();
  if (!resources.length) {
    return res.json({ ok: true, suggested_assignee: null, reason: 'No resources available' });
  }

  let best = null;
  for (const resource of resources) {
    const roleText = `${resource.role || ''} ${resource.job_description || ''}`.toLowerCase();
    const roleKeywords = keywordSet(roleText);
    let score = 0;

    for (const kw of roleKeywords) {
      if (textKeywords.has(kw)) score += 1;
    }

    if (text.includes((resource.name || '').toLowerCase())) score += 2;

    if (!best || score > best.score) {
      best = { resource, score };
    }
  }

  if (!best || best.score === 0) {
    return res.json({ ok: true, suggested_assignee: null, reason: 'No clear keyword match found' });
  }

  return res.json({
    ok: true,
    task_id: task.id,
    suggested_assignee: best.resource.name,
    score: best.score,
    reason: `Matched task/discussion keywords with role: ${best.resource.role}`
  });
});

app.get('/agent-runs', (_req, res) => {
  res.json(db.prepare('SELECT * FROM agent_runs ORDER BY created_at DESC LIMIT 100').all());
});

app.post('/agent-runs', (req, res) => {
  const r = req.body;
  if (!r.id || !r.goal || !r.status || !r.started_at) {
    return res.status(400).json({ error: 'id, goal, status, started_at are required' });
  }
  db.prepare(`INSERT OR REPLACE INTO agent_runs
    (id, goal, project_id, status, started_at, completed_at, agent_count,
     total_cost_usd, total_input_tokens, total_output_tokens, report, created_at)
    VALUES (@id, @goal, @project_id, @status, @started_at, @completed_at, @agent_count,
     @total_cost_usd, @total_input_tokens, @total_output_tokens, @report, @created_at)`
  ).run({
    id:                  r.id,
    goal:                r.goal,
    project_id:          r.project_id || null,
    status:              r.status,
    started_at:          r.started_at,
    completed_at:        r.completed_at || null,
    agent_count:         r.agent_count || 0,
    total_cost_usd:      r.total_cost_usd || 0,
    total_input_tokens:  r.total_input_tokens || 0,
    total_output_tokens: r.total_output_tokens || 0,
    report:              r.report || null,
    created_at:          r.created_at || new Date().toISOString(),
  });
  res.json({ ok: true });
});

const port = process.env.PM_PORT || 8788;
app.listen(port, () => console.log(`Keith PM API running on :${port}`));
