(async function(){
  const res = await fetch('./data/model-usage.sample.json');
  const data = await res.json();
  const el = document.getElementById('model-usage-body');
  el.innerHTML = (data.models || []).map(r => `<tr><td>${r.model}</td><td>${r.provider}</td><td>${r.requests}</td><td>${Number(r.totalTokens).toLocaleString()}</td><td>$${Number(r.costUsd).toFixed(2)}</td><td>${r.primaryUse}</td></tr>`).join('');
})();
