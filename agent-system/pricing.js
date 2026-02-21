export const PRICING = {
  'claude-haiku-4-5-20251001': { input: 0.80,  output: 4.00  },
  'claude-sonnet-4-6':         { input: 3.00,  output: 15.00 },
  'claude-opus-4-6':           { input: 15.00, output: 75.00 },
};

export const INR_RATE = 85;

export function calcCost(model, inputTokens, outputTokens) {
  const p = PRICING[model] || { input: 3.00, output: 15.00 };
  return (inputTokens / 1_000_000) * p.input + (outputTokens / 1_000_000) * p.output;
}

export function calcCostINR(usd) { return usd * INR_RATE; }
