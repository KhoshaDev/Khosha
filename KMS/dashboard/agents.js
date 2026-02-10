const API='/api';
const j=async(u,o)=>{const r=await fetch(u,o);if(!r.ok)throw new Error(await r.text());return r.json();};

async function render(){
  const agents = await j(`${API}/agents/overview`);
  const list = agents.map(a=>{
    const active=(a.tasks||[]).find(t=>t.status==='in_progress');
    return `<article class='rounded-xl border border-line bg-surface p-3'>
      <div class='flex items-start justify-between gap-2'><h3 class='font-semibold text-sm'>${a.name}</h3><span class='text-[10px] px-2 py-0.5 rounded ${active?'bg-emerald-500/20 text-emerald-300':'bg-slate-500/20 text-slate-300'}'>${active?'active':'idle'}</span></div>
      <p class='text-[11px] text-slate-400 mt-1'>${a.role||'-'} • ${a.type||'-'}</p>
      <p class='text-[11px] text-slate-500 mt-1'>Tasks: ${a.stats.total} | todo ${a.stats.todo} | in progress ${a.stats.in_progress} | done ${a.stats.done}</p>
      <p class='text-[11px] text-slate-400 mt-1'><b>Current:</b> ${active?active.title:'None'}</p>
      <p class='text-[11px] text-slate-400 mt-1'><b>Idle reason:</b> ${a.idle_reason||'Working / no reason'}</p>
    </article>`;
  }).join('');
  document.getElementById('agents').innerHTML=list||"<p class='text-xs text-slate-400'>No agents/resources found.</p>";
}

document.getElementById('auto').onclick=async()=>{const r=await j(`${API}/agents/auto-pick`,{method:'POST'});const d=await j(`${API}/tasks/auto-distribute`,{method:'POST'});document.getElementById('out').textContent=`Auto-pick: ${r.picked} started • Distributed: ${d.reassigned} reassigned`; render();};
render();