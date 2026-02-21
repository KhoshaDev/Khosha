const API = '/pm-api';
const INR_RATE = 85;

function fmt(n, dec = 2) { return Number(n || 0).toFixed(dec); }
function fmtINR(usd) { return '₹' + fmt(usd * INR_RATE); }
function fmtUSD(usd) { return '$' + fmt(usd, 4); }
function fmtK(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n || 0); }

function duration(startedAt, completedAt) {
  if (!startedAt) return '—';
  const s = new Date(completedAt || Date.now()) - new Date(startedAt);
  if (s < 0) return '—';
  const sec = Math.floor(s / 1000);
  if (sec < 60) return sec + 's';
  return Math.floor(sec / 60) + 'm ' + (sec % 60) + 's';
}

function statusChip(status) {
  const map = { completed: '#15803d', running: '#1d4ed8', failed: '#b91c1c', cancelled: '#78716c' };
  const color = map[status] || '#64748b';
  return `<span style="background:${color}18;color:${color};border:1px solid ${color}44;padding:2px 7px;border-radius:999px;font-size:10px;font-weight:700">${status}</span>`;
}

function shortId(id) {
  return `<span title="${id}" style="font-family:monospace;font-size:10px">${id.slice(-8)}</span>`;
}

async function load() {
  let runs = [];
  try {
    const r = await fetch(`${API}/agent-runs`);
    if (r.ok) runs = await r.json();
  } catch {}

  // KPI summary
  const total = runs.length;
  const totalCostUSD = runs.reduce((a, r) => a + (r.total_cost_usd || 0), 0);
  const totalTokens = runs.reduce((a, r) => a + (r.total_input_tokens || 0) + (r.total_output_tokens || 0), 0);
  const completed = runs.filter(r => r.status === 'completed').length;

  document.getElementById('kpis').innerHTML = [
    ['Total Runs', total],
    ['Completed', completed],
    ['Total Cost', fmtUSD(totalCostUSD) + ' / ' + fmtINR(totalCostUSD)],
    ['Total Tokens', fmtK(totalTokens)],
  ].map(([label, val]) =>
    `<div class="card"><h3>${label}</h3><p>${val}</p></div>`
  ).join('');

  const tbody = document.getElementById('runs-body');
  if (!runs.length) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:#64748b;padding:20px">No agent runs yet.</td></tr>';
    return;
  }

  tbody.innerHTML = runs.map(r => `
    <tr>
      <td>${shortId(r.id)}</td>
      <td style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.goal}">${r.goal}</td>
      <td>${statusChip(r.status)}</td>
      <td style="text-align:center">${r.agent_count || 0}</td>
      <td>${fmtK(r.total_input_tokens)}</td>
      <td>${fmtK(r.total_output_tokens)}</td>
      <td>${fmtUSD(r.total_cost_usd)}</td>
      <td>${fmtINR(r.total_cost_usd)}</td>
      <td style="white-space:nowrap;color:#64748b;font-size:10px">${r.started_at ? new Date(r.started_at).toLocaleString() : '—'}</td>
      <td>${duration(r.started_at, r.completed_at)}</td>
    </tr>`
  ).join('');
}

load();
setInterval(load, 15000);
