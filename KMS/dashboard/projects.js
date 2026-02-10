const API='/api';

async function j(url,opts){const r=await fetch(url,opts); if(!r.ok) throw new Error(await r.text()); return r.json();}
const pct=(v)=>`${Math.round(v)}%`;

function progressBar(p){
  const total=p.total||0; const done=p.done||0; const val=total?((done/total)*100):0;
  return `<div style="margin-top:8px"><div class="meta">Progress: ${done}/${total}</div><div style="height:8px;background:#e2e8f0;border-radius:999px;overflow:hidden"><div style="height:100%;width:${val}%;background:${val>70?'#16a34a':val>30?'#d97706':'#dc2626'}"></div></div></div>`;
}

async function loadProjects(){
  const ps=await j(`${API}/projects`);
  const cards=[];
  for(const p of ps){
    const ov=await j(`${API}/projects/${p.id}/overview`);
    const red=ov.progress.blocked>0?'🔴':'🟢';
    cards.push(`<div class="dept"><h4>${p.name}</h4><p class="meta">${p.description||'No description'}</p><p class="meta">Dependencies: ${p.dependencies||'None'}</p><p class="meta">Status: ${red} ${p.status}</p>${progressBar(ov.progress)}<div class="chips"><button class="btn" onclick="openProject('${p.id}')">Open</button><button class="btn" onclick="delProject('${p.id}')">Delete</button></div></div>`);
  }
  document.getElementById('project-cards').innerHTML=cards.join('')||'<div class="dept"><p class="meta">No projects</p></div>';
}

window.openProject=async(id)=>{
  const d=await j(`${API}/projects/${id}/overview`);
  const tRows=d.tasks.map(t=>`<div class="task"><b>${t.title}</b><div class="meta">${t.assignee||'Unassigned'} • ${t.status} • due ${t.due_date||'n/a'} • depends ${t.depends_on||'none'}</div><div class="chips"><button class="btn" onclick="setStatus('${t.id}','in_progress')">Start</button><button class="btn" onclick="setStatus('${t.id}','done')">Done</button><button class="btn" onclick="editTask('${t.id}')">Edit</button><button class="btn" onclick="delTask('${t.id}')">Delete</button></div></div>`).join('')||'<p class="meta">No tasks</p>';
  const people=d.people.length?d.people.join(', '):'No one assigned yet';
  document.getElementById('project-detail').innerHTML=`<div class="dept"><h3>📂 ${d.project.name}</h3><p class="meta"><strong>Description:</strong> ${d.project.description||'-'}</p><p class="meta"><strong>Dependencies:</strong> ${d.project.dependencies||'-'}</p><p class="meta"><strong>People:</strong> ${people}</p><div class="chips"><span class="chip">🟢 in_progress ${d.progress.in_progress}</span><span class="chip">🔴 blocked ${d.progress.blocked}</span><span class="chip">⚪ todo ${d.progress.todo}</span><span class="chip">✅ done ${d.progress.done}</span></div>${progressBar(d.progress)}<h4 style="margin-top:12px">Tasks & Subtasks</h4>${tRows}</div>`;
};

window.setStatus=async(id,status)=>{await j(`${API}/tasks/${id}/status`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});loadProjects();};
window.delProject=async(id)=>{if(!confirm('Delete project?'))return;await j(`${API}/projects/${id}`,{method:'DELETE'});document.getElementById('project-detail').innerHTML='';loadProjects();};
window.delTask=async(id)=>{if(!confirm('Delete task?'))return;await j(`${API}/tasks/${id}`,{method:'DELETE'});loadProjects();};
window.editTask=async(id)=>{const title=prompt('New title');if(title===null)return;const due=prompt('Due date (YYYY-MM-DD optional)')||null;const dep=prompt('Depends on task id (optional)')||null;await j(`${API}/tasks/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,due_date:due,depends_on:dep})});loadProjects();};

document.getElementById('add-project').onclick=async()=>{
  const name=document.getElementById('p-name').value.trim(); if(!name) return;
  const description=document.getElementById('p-description').value.trim();
  const dependencies=document.getElementById('p-dependencies').value.trim();
  await j(`${API}/projects`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,dependencies,status:'planning',owner:'Keith Anderson'})});
  document.getElementById('p-name').value='';document.getElementById('p-description').value='';document.getElementById('p-dependencies').value='';
  loadProjects();
};

loadProjects();
