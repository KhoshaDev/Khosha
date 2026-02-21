import { runWorker } from './worker.js';
import { calcCost } from './pricing.js';

// ── Model registry ──────────────────────────────────────────────────────────

export const MODELS = {
  low:    'claude-haiku-4-5-20251001',  // fast, cheap — default
  medium: 'claude-sonnet-4-6',          // balanced — complex tasks
  high:   'claude-opus-4-6',            // most capable — very complex tasks
};

const COMPLEXITY_LABELS = {
  low:    '⚡ Haiku 4.5',
  medium: '🔷 Sonnet 4.6',
  high:   '🔶 Opus 4.6',
};

// ── Complexity assessor (always uses Haiku — fast & cheap) ──────────────────

export async function assessComplexity(client, task, context = '') {
  const prompt = context
    ? `Task: ${task}\n\nContext: ${context}`
    : `Task: ${task}`;

  const response = await client.messages.create({
    model: MODELS.low,
    max_tokens: 20,
    system: `You are a task complexity classifier. Given a task description, reply with exactly one word: "low", "medium", or "high".

- low: Simple, well-defined, single-step, no deep analysis needed (e.g. format data, fetch a URL, write a short list)
- medium: Multi-step, requires research/analysis/coding, moderate depth (e.g. write a report, build a small feature, analyse data)
- high: Highly complex, requires deep reasoning, extensive research, advanced code, or strategic planning (e.g. full system design, complex multi-domain analysis, advanced algorithms)`,
    messages: [{ role: 'user', content: prompt }]
  });

  const text = response.content[0]?.text?.toLowerCase().trim();
  if (text?.includes('high'))   return 'high';
  if (text?.includes('medium')) return 'medium';
  return 'low';
}

// ── Orchestrator tools ──────────────────────────────────────────────────────

const ORCHESTRATOR_TOOLS = [
  {
    name: 'delegate_to_agent',
    description: `Spawn a specialized sub-agent to handle a specific subtask.
Available roles:
- researcher: Web search, fact-finding, source analysis
- developer: Code writing & execution, file operations, technical solutions
- analyst: KMS data analysis, metrics, insights from business data
- writer: Content creation, reports, documentation, summaries
- coordinator: KMS task management, project updates, team coordination

Set complexity honestly — this determines which model runs the agent:
- low → Haiku 4.5 (fast & cheap, simple tasks)
- medium → Sonnet 4.6 (balanced, requires reasoning or research)
- high → Opus 4.6 (most capable, complex multi-step or strategic work)`,
    input_schema: {
      type: 'object',
      properties: {
        role: {
          type: 'string',
          enum: ['researcher', 'developer', 'analyst', 'writer', 'coordinator'],
          description: 'The specialist role best suited for this subtask'
        },
        task: {
          type: 'string',
          description: 'Clear, specific description of what this agent needs to accomplish.'
        },
        context: {
          type: 'string',
          description: 'Background context, results from previous agents, or constraints the agent should know about'
        },
        complexity: {
          type: 'string',
          enum: ['low', 'medium', 'high'],
          description: 'How complex is this subtask? Determines which model runs it. Default to "low" unless reasoning/research/advanced work is required.'
        }
      },
      required: ['role', 'task', 'complexity']
    }
  }
];

const ORCHESTRATOR_SYSTEM = `You are the Khosha Orchestrator — a master coordinator that breaks down complex goals into subtasks and delegates them to specialized agents.

You work for Khosha Systems, a technology company that builds SaaS products for retailers and businesses.
The company has a KMS (Khosha Management System) with leads, projects, proposals, tasks, team, and infra data.

Your workflow:
1. Analyse the goal thoroughly
2. Create a clear execution plan
3. Delegate tasks to the right specialists using delegate_to_agent
4. For each delegation, honestly assess the complexity (low/medium/high) — this selects the AI model
5. Use results from earlier agents as context for later agents when there are dependencies
6. Synthesise all results into a comprehensive, well-structured final report

Complexity guide for delegation:
- low: Simple, single-step, no deep reasoning (fetch data, format output, short summary)
- medium: Multi-step, needs research/analysis/coding
- high: Deep strategic reasoning, advanced code, complex multi-domain analysis

Guidelines:
- Always explain your reasoning before delegating
- Default to "low" complexity — only escalate when genuinely needed
- Your final response should include: summary, key findings per agent, actionable next steps`;

// ── Main orchestrator runner ────────────────────────────────────────────────

export async function runOrchestrator({ client, runId, goal, forceComplexity, priorContext, requestApproval, emit }) {
  // Step 1: Assess overall goal complexity to pick orchestrator model
  // If the user forced a complexity, use it; otherwise auto-assess with Haiku
  const goalComplexity = forceComplexity || await assessComplexity(client, goal);
  const orchestratorModel = MODELS[goalComplexity];

  emit({
    type: 'model_selected',
    target: 'orchestrator',
    complexity: goalComplexity,
    model: orchestratorModel,
    label: COMPLEXITY_LABELS[goalComplexity]
  });

  emit({ type: 'orchestrator_start', goal });

  const initialContent = priorContext
    ? `Previous task context:\n${priorContext}\n\n---\n\nFollow-up task: ${goal}`
    : goal;
  const messages = [{ role: 'user', content: initialContent }];
  let agentCounter = 0;
  let iterations = 0;
  const MAX_ITERATIONS = 20;

  while (iterations++ < MAX_ITERATIONS) {
    const response = await client.messages.create({
      model: orchestratorModel,
      max_tokens: 8096,
      system: ORCHESTRATOR_SYSTEM,
      tools: ORCHESTRATOR_TOOLS,
      messages
    });

    // Emit token usage for this call
    if (response.usage) {
      emit({
        type: 'token_usage',
        model: orchestratorModel,
        input_tokens:  response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
        cost: calcCost(orchestratorModel, response.usage.input_tokens, response.usage.output_tokens),
      });
    }

    const textBlocks = response.content.filter(b => b.type === 'text');
    if (textBlocks.length > 0) {
      emit({ type: 'orchestrator_thinking', content: textBlocks.map(b => b.text).join('\n') });
    }

    messages.push({ role: 'assistant', content: response.content });

    if (response.stop_reason === 'end_turn') {
      const report = response.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
      emit({ type: 'run_complete', report });
      return report;
    }

    if (response.stop_reason === 'tool_use') {
      const toolUseBlocks = response.content.filter(b => b.type === 'tool_use');
      const toolResults = [];

      for (const block of toolUseBlocks) {
        if (block.name === 'delegate_to_agent') {
          const { role, task, context, complexity: requestedComplexity } = block.input;
          const agentId = `agent-${++agentCounter}`;

          // Step 2: Determine complexity for this sub-task.
          // If user forced a model → use it for all agents, no questions asked.
          // Otherwise → always default to Haiku, but assess whether more is needed.
          //   If more is needed, pause and ask the user to approve the upgrade.
          let finalComplexity;
          if (forceComplexity) {
            finalComplexity = forceComplexity;
          } else {
            // Assess what the task actually needs (cheap Haiku call)
            let assessed = requestedComplexity || 'low';
            if (requestedComplexity === 'low') {
              assessed = await assessComplexity(client, task, context);
            }

            if (assessed !== 'low' && requestApproval) {
              // Pause the run and ask the user before upgrading past Haiku
              finalComplexity = await requestApproval({ agentId, role, task, assessed });
            } else {
              // Haiku is sufficient, or no approval mechanism — stay on Haiku
              finalComplexity = 'low';
            }
          }

          const workerModel = MODELS[finalComplexity];

          emit({
            type: 'agent_spawned',
            agentId, role, task,
            parentId: 'orchestrator',
            complexity: finalComplexity,
            model: workerModel,
            label: COMPLEXITY_LABELS[finalComplexity]
          });

          let result;
          try {
            result = await runWorker({ client, runId, agentId, role, task, context, model: workerModel, emit });
          } catch (e) {
            result = `Agent failed: ${e.message}`;
            emit({ type: 'agent_error', agentId, role, error: e.message });
          }

          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: `Agent ${agentId} (${role} / ${COMPLEXITY_LABELS[finalComplexity]}) completed.\n\nResult:\n${result}`
          });
        }
      }

      messages.push({ role: 'user', content: toolResults });
    }
  }

  const report = 'Orchestrator reached maximum iterations.';
  emit({ type: 'run_complete', report });
  return report;
}
