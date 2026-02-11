(async function(){
  const res = await fetch('./data/workforce-v2.json');
  const data = await res.json();
  const el = document.getElementById('workforce');
  el.innerHTML = (data.departments || []).map(d => `<div class="dept"><h4>${d.name}</h4><ul>${(d.agents||[]).map(a=>`<li><b>${a.name || a}</b><br/><span class="meta">Start: ${a.startDate || 'N/A'}</span><br/><span class="meta">${a.jobDescription || ''}</span></li>`).join('')}</ul></div>`).join('');
})();
