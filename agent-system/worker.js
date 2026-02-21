import Anthropic from '@anthropic-ai/sdk';
import { getToolsForRole, executeTool } from './tools.js';
import { calcCost } from './pricing.js';

const ROLE_DESCRIPTIONS = {
  researcher:  'You are a meticulous researcher. Search the web, read sources, and return well-organised findings with key facts, data points, and relevant URLs.',
  developer:   'You are a skilled developer. Write clean, working code to solve problems. Test your code by running it and iterate until it works correctly.',
  analyst:     'You are a data analyst. Query the KMS database, process the data, and return clear insights, patterns, and actionable recommendations.',
  writer:      'You are a precise writer. Create well-structured, professional content — reports, summaries, plans, or documentation.',
  coordinator: 'You are a project coordinator. Interact with the KMS to manage tasks, update statuses, and ensure proper tracking of work.',
  general:     'You are a capable general-purpose agent. Use whatever tools you need to complete the task effectively.'
};

export async function runWorker({ client, runId, agentId, role, task, context, model, emit, depth = 0 }) {
  const tools = getToolsForRole(role);
  const selectedModel = model || 'claude-haiku-4-5-20251001'; // default to Haiku

  const systemPrompt = `${ROLE_DESCRIPTIONS[role] || ROLE_DESCRIPTIONS.general}

You are working for Khosha Systems, a technology company.
Your task has been delegated by the orchestrator.

Context from orchestrator:
${context || 'No additional context provided.'}

Instructions:
- Use your tools to complete the task thoroughly
- Be concise but comprehensive in your final answer
- If a tool fails, try an alternative approach
- Return a clear, structured result that the orchestrator can use`;

  const messages = [{ role: 'user', content: `Complete this task:\n\n${task}` }];

  emit({ type: 'agent_start', agentId, role, task });

  let iterations = 0;
  const MAX_ITERATIONS = 12;

  while (iterations++ < MAX_ITERATIONS) {
    const response = await client.messages.create({
      model: selectedModel,
      max_tokens: 4096,
      system: systemPrompt,
      tools,
      messages
    });

    // Emit token usage
    if (response.usage) {
      emit({
        type: 'token_usage',
        agentId,
        model: selectedModel,
        input_tokens:  response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
        cost: calcCost(selectedModel, response.usage.input_tokens, response.usage.output_tokens),
      });
    }

    // Emit thinking content
    const textBlocks = response.content.filter(b => b.type === 'text');
    if (textBlocks.length > 0) {
      emit({ type: 'agent_thinking', agentId, role, content: textBlocks.map(b => b.text).join('\n') });
    }

    messages.push({ role: 'assistant', content: response.content });

    if (response.stop_reason === 'end_turn') {
      const result = response.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
      emit({ type: 'agent_complete', agentId, role, result });
      return result;
    }

    if (response.stop_reason === 'tool_use') {
      const toolUseBlocks = response.content.filter(b => b.type === 'tool_use');
      const toolResults = [];

      for (const block of toolUseBlocks) {
        emit({ type: 'tool_call', agentId, role, tool: block.name, input: block.input });

        let result;
        try {
          result = await executeTool(block.name, block.input);
        } catch (e) {
          result = { error: e.message };
        }

        const resultStr = JSON.stringify(result).slice(0, 6000);
        emit({ type: 'tool_result', agentId, role, tool: block.name, result: resultStr });

        toolResults.push({
          type: 'tool_result',
          tool_use_id: block.id,
          content: resultStr
        });
      }

      messages.push({ role: 'user', content: toolResults });
    }
  }

  const finalText = 'Agent reached maximum iterations without completing the task.';
  emit({ type: 'agent_complete', agentId, role, result: finalText });
  return finalText;
}
