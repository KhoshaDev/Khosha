const API='/api';
const j=async(u,o)=>{const r=await fetch(u,o);if(!r.ok)throw new Error(await r.text());return r.json();};
const badge=s=>({done:'bg-emerald-500/20 text-emerald-300',in_progress:'bg-blue-500/20 text-blue-300',blocked:'bg-red-500/20 text-red-300',todo:'bg-slate-500/20 text-slate-300'}[s]||'bg-slate-500/20 text-slate-300');
const pct=p=>{const t=p.total||0,d=p.done||0;return t?Math.round((d/t)*100):0};

async function renderList(){
  const ps=await j('/api/projects');
  const out=[];
  for(const p of ps){
    const ov=await j(`${API}/projects/${p.id}/overview`);
    const pr=pct(ov.progress); const ok=(ov.progress.blocked||0)===0;
    out.push(`<article class='rounded-xl border border-line bg-surface p-3'><div class='flex items-start justify-between'><h3 class='font-semibold text-sm pr-2'>${p.name}</h3><span class='w-2 h-2 mt-1 rounded-full ${ok?'bg-emerald-400':'bg-red-400'}'></span></div><p class='text-xs text-slate-400 mt-1'>${p.description||'No description'}</p><p class='text-[11px] text-slate-500 mt-1'>Dependencies: ${p.dependencies||'none'}</p><div class='mt-2 h-2 bg-[#111827] rounded-full overflow-hidden'><div class='h-full bg-primary' style='width:${pr}%'></div></div><p class='text-[11px] text-slate-400 mt-1'>${pr}% complete</p><div class='mt-2 flex gap-2'><button class='px-2 py-1 rounded bg-primary text-xs' onclick="openProject('${p.id}')">Open</button><button class='px-2 py-1 rounded bg-slate-700 text-xs' onclick="editProject('${p.id}')">Edit</button><button class='px-2 py-1 rounded bg-red-600/80 text-xs' onclick="delProject('${p.id}')">Delete</button></div></article>`);
  }
  projectList.innerHTML=out.join('')||"<p class='text-xs text-slate-400'>No projects.</p>";
}

window.openProject=async(id)=>{
  const d=await j(`${API}/projects/${id}/overview`);
  const people=d.people.length?d.people.join(', '):'No assignees';
  const tasks=d.tasks.map(t=>`<div class='rounded-lg border border-line p-2'><div class='flex items-start justify-between gap-2'><b class='text-sm'>${t.title}</b><span class='text-[10px] px-2 py-0.5 rounded ${badge(t.status)}'>${t.status}</span></div><p class='text-[11px] text-slate-400 mt-1'>Assignee: ${t.assignee||'Unassigned'} • Due: ${t.due_date||'n/a'}</p><p class='text-[11px] text-slate-500'>Depends on: ${t.depends_on||'none'}</p><div class='mt-2 flex flex-wrap gap-2'><button class='px-2 py-1 rounded bg-blue-600 text-xs' onclick="setStatus('${t.id}','in_progress')">Start</button><button class='px-2 py-1 rounded bg-emerald-600 text-xs' onclick="setStatus('${t.id}','done')">Done</button><button class='px-2 py-1 rounded bg-slate-700 text-xs' onclick="editTask('${t.id}')">Edit</button><button class='px-2 py-1 rounded bg-red-600/80 text-xs' onclick="deleteTask('${t.id}')">Delete</button></div></div>`).join('') || "<p class='text-xs text-slate-400'>No tasks.</p>";
  projectOpen.innerHTML=`<article class='rounded-xl border border-line bg-surface p-3'><h3 class='font-bold'>${d.project.name}</h3><p class='text-xs text-slate-300 mt-1'>${d.project.description||'-'}</p><p class='text-[11px] text-slate-500 mt-1'>Dependencies: ${d.project.dependencies||'none'}</p><p class='text-[11px] text-slate-400 mt-1'>People: ${people}</p><div class='mt-2 flex gap-2 text-[10px] flex-wrap'><span class='px-2 py-1 rounded bg-blue-500/20'>in progress ${d.progress.in_progress}</span><span class='px-2 py-1 rounded bg-slate-500/20'>not started ${d.progress.todo}</span><span class='px-2 py-1 rounded bg-red-500/20'>blocked ${d.progress.blocked}</span><span class='px-2 py-1 rounded bg-emerald-500/20'>done ${d.progress.done}</span></div><div class='mt-3 space-y-2'>${tasks}</div></article>`;
};

window.setStatus=async(id,status)=>{await j(`${API}/tasks/${id}/status`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});renderList();};
window.editTask=async(id)=>{const title=prompt('Task title'); if(title===null) return; const due=prompt('Due date (YYYY-MM-DD)','')||null; const dep=prompt('Depends on task id','')||null; const assignee=prompt('Assignee name','')||null; await j(`${API}/tasks/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,due_date:due,depends_on:dep,assignee})});renderList();};
window.deleteTask=async(id)=>{if(!confirm('Delete task?'))return; await j(`${API}/tasks/${id}`,{method:'DELETE'});renderList(); projectOpen.innerHTML='';};
window.editProject=async(id)=>{const ps=await j('/api/projects'); const p=ps.find(x=>x.id===id); if(!p) return; const name=prompt('Project name',p.name); if(name===null)return; const description=prompt('Description',p.description||''); if(description===null)return; const dependencies=prompt('Dependencies',p.dependencies||''); if(dependencies===null)return; await j(`${API}/projects/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,dependencies})});renderList();};
window.delProject=async(id)=>{if(!confirm('Delete project and its tasks?'))return; await j(`${API}/projects/${id}`,{method:'DELETE'});projectOpen.innerHTML='';renderList();};

document.getElementById('add-project').onclick=async()=>{const name=document.getElementById('p-name').value.trim(); if(!name)return; const description=document.getElementById('p-desc').value.trim(); const dependencies=document.getElementById('p-deps').value.trim(); await j('/api/projects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,dependencies,owner:'Keith Anderson',status:'planning'})}); pName.value=''; pDesc.value=''; pDeps.value=''; renderList();};

const projectList=document.getElementById('project-list');
const projectOpen=document.getElementById('project-open');
const pName=document.getElementById('p-name');
const pDesc=document.getElementById('p-desc');
const pDeps=document.getElementById('p-deps');
renderList();