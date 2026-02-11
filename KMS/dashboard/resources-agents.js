const API='/api';
const list=document.getElementById('list');
const timeline=document.getElementById('timeline');
const tTitle=document.getElementById('tTitle');
let agents=[];

async function load(){
  agents=await (await fetch(`${API}/resources/agents`)).json();
  list.innerHTML=agents.map(a=>`<button class='w-full text-left rounded-lg border border-line p-2 hover:border-primary' onclick="openAgent('${a.agent_key}')"><div class='font-semibold text-sm'>${a.name}</div><div class='text-xs text-slate-400'>${a.role||'-'}</div><div class='text-[11px] text-slate-500'>session_key: ${a.session_key||'-'}</div><div class='text-[11px] text-slate-500'>session_id: ${a.session_id||'-'}</div><div class='text-[11px] text-slate-500'>events: ${a.timeline_count||0}</div></button>`).join('');
}

window.openAgent=async(agentKey)=>{
  const a=agents.find(x=>x.agent_key===agentKey);
  tTitle.textContent=`Timeline — ${a?.name||agentKey}`;
  const rows=await (await fetch(`${API}/resources/agents/${agentKey}/timeline`)).json();
  timeline.innerHTML=rows.map(r=>`<article class='rounded-lg border border-line p-2'><div class='text-[11px] text-slate-500'>${new Date(r.created_at).toLocaleString()}</div><div class='text-xs text-primary'>${r.event_type}</div><div class='text-sm whitespace-pre-wrap'>${r.message}</div></article>`).join('') || `<p class='text-sm text-slate-400'>No timeline yet.</p>`;
}

load();
