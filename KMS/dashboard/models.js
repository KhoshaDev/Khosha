const AGENT_API = '/agent-api';
const INR_RATE = 85;

const PROVIDER = {
  'claude-haiku-4-5-20251001': 'Anthropic',
  'claude-sonnet-4-6':         'Anthropic',
  'claude-opus-4-6':           'Anthropic',
};
const LABEL = {
  'claude-haiku-4-5-20251001': 'Claude Haiku 4.5',
  'claude-sonnet-4-6':         'Claude Sonnet 4.6',
  'claude-opus-4-6':           'Claude Opus 4.6',
};

function fmtK(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n || 0);
}
function fmtUSD(v) { return '$' + Number(v || 0).toFixed(4); }
function fmtINR(v) { return '₹' + Number((v || 0) * INR_RATE).toFixed(2); }

async function load() {
  // Pull all historical runs from agent-system
  let history = [];
  try {
    const r = await fetch(`${AGENT_API}/history`);
    if (r.ok) history = await r.json();
  } catch {}

  // Aggregate per model
  const models = {};
  for (const run of history) {
    const byModel = run.usage?.by_model || {};
    for (const [model, usage] of Object.entries(byModel)) {
      if (!models[model]) {
        models[model] = { runs: 0, input_tokens: 0, output_tokens: 0, cost: 0 };
      }
      models[model].runs          += 1;
      models[model].input_tokens  += usage.input_tokens  || 0;
      models[model].output_tokens += usage.output_tokens || 0;
      models[model].cost          += usage.cost          || 0;
    }
  }

  // KPI row totals
  const totalRuns  = history.length;
  const totalCost  = Object.values(models).reduce((s, m) => s + m.cost, 0);
  const totalTok   = Object.values(models).reduce((s, m) => s + m.input_tokens + m.output_tokens, 0);

  document.getElementById('kpis').innerHTML = [
    ['Total Runs',   totalRuns],
    ['Total Tokens', fmtK(totalTok)],
    ['Total (USD)',  fmtUSD(totalCost)],
    ['Total (INR)',  fmtINR(totalCost)],
  ].map(([label, val]) =>
    `<div class="card"><h3>${label}</h3><p>${val}</p></div>`
  ).join('');

  const tbody = document.getElementById('model-usage-body');
  const rows = Object.entries(models);
  if (!rows.length) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:#64748b;padding:20px">No runs yet — start an agent task to see live data here.</td></tr>';
    return;
  }

  // Sort by cost desc
  rows.sort((a, b) => b[1].cost - a[1].cost);

  tbody.innerHTML = rows.map(([model, m]) => `
    <tr>
      <td>${LABEL[model] || model}</td>
      <td>${PROVIDER[model] || 'Anthropic'}</td>
      <td style="text-align:right">${m.runs}</td>
      <td style="text-align:right">${fmtK(m.input_tokens)}</td>
      <td style="text-align:right">${fmtK(m.output_tokens)}</td>
      <td style="text-align:right">${fmtK(m.input_tokens + m.output_tokens)}</td>
      <td style="text-align:right">${fmtUSD(m.cost)}</td>
      <td style="text-align:right">${fmtINR(m.cost)}</td>
    </tr>`
  ).join('');
}

load();
setInterval(load, 30000);
