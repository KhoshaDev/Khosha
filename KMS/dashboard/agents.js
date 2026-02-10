const API='/api';
async function j(url,opts){const r=await fetch(url,opts); if(!r.ok) throw new Error(await r.text()); return r.json();}

async function render(){
  const agents=await j(`${API}/agents/overview`);
  document.getElementById('agents-list').innerHTML = agents.map(a=>{
    const active=a.tasks.find(t=>t.status==='in_progress');
    const why = active ? `Working on: ${active.title}` : `Idle reason: ${a.idle_reason||'n/a'}`;
    return `<div class="dept"><h4>${a.name}</h4><p class="meta">${a.role} • ${a.type}</p><p class="meta">Tasks: ${a.stats.total} | in_progress ${a.stats.in_progress} | todo ${a.stats.todo} | done ${a.stats.done}</p><p class="meta">${why}</p><details><summary class="meta">View tasks</summary>${a.tasks.map(t=>`<div class='task'><b>${t.title}</b><div class='meta'>${t.status} • due ${t.due_date||'n/a'}</div></div>`).join('')||'<p class="meta">No tasks</p>'}</details></div>`;
  }).join('') || '<div class="dept"><p class="meta">No agents yet.</p></div>';
}

document.getElementById('auto-pick').onclick=async()=>{
  const r=await j(`${API}/agents/auto-pick`,{method:'POST'});
  document.getElementById('auto-out').textContent=`Auto-picked ${r.picked} task(s).`;
  render();
};

render();
