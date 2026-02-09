async function loadData() {
  const [kanbanRes, workforceRes, modelUsageRes] = await Promise.all([
    fetch('./data/kanban.sample.json'),
    fetch('./data/workforce-v2.json'),
    fetch('./data/model-usage.sample.json')
  ]);
  const kanban = await kanbanRes.json();
  const workforce = await workforceRes.json();
  const modelUsage = await modelUsageRes.json();
  render(kanban, workforce, modelUsage);
}

function countAll(lanes){
  return Object.values(lanes).reduce((n, list) => n + list.length, 0);
}

function render(kanban, workforce, modelUsage) {
  const lanes = kanban.lanes || {};
  const total = countAll(lanes);
  const inProgress = (lanes.in_progress || []).length;
  const review = (lanes.review || []).length;
  const tier3 = Object.values(lanes).flat().filter(t => t.modelTier === 'tier3').length;

  document.getElementById('kpi-total').textContent = total;
  document.getElementById('kpi-progress').textContent = inProgress;
  document.getElementById('kpi-review').textContent = review;
  document.getElementById('kpi-tier3').textContent = tier3;

  const board = document.getElementById('board');
  const laneOrder = ['todo','in_progress','review','done'];
  board.innerHTML = laneOrder.map(key => {
    const items = lanes[key] || [];
    return `<div class="lane"><h3>${key.replace('_',' ').toUpperCase()} (${items.length})</h3>${items.map(t => `
      <div class="task">
        <b>${t.id} · ${t.title}</b>
        <div class="meta">Owner: ${t.owner}</div>
        <div class="meta">Priority: ${t.priority} · Model: ${t.modelTier}</div>
      </div>
    `).join('')}</div>`;
  }).join('');

  const modelUsageEl = document.getElementById('model-usage-body');
  const rows = modelUsage.models || [];
  modelUsageEl.innerHTML = rows.map(r => `
    <tr>
      <td>${r.model}</td>
      <td>${r.provider}</td>
      <td>${r.requests}</td>
      <td>${r.totalTokens.toLocaleString()}</td>
      <td>$${Number(r.costUsd).toFixed(2)}</td>
      <td>${r.primaryUse}</td>
    </tr>
  `).join('');

  const workforceEl = document.getElementById('workforce');
  workforceEl.innerHTML = (workforce.departments || []).map(d => `
    <div class="dept">
      <h4>${d.name}</h4>
      <ul>${(d.agents || []).map(a => `<li>${a}</li>`).join('')}</ul>
    </div>
  `).join('');

  document.getElementById('generated-at').textContent = `Last updated: ${kanban.generatedAt} · Usage window: ${modelUsage.period}`;
}

loadData().catch(err => {
  console.error(err);
  document.body.innerHTML += '<p style="color:#fca5a5;padding:24px">Could not load dashboard data.</p>';
});