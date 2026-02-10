const API='/api';
async function j(url,opts){const r=await fetch(url,opts); if(!r.ok) throw new Error(await r.text()); return r.json();}
const stLight=(p)=>((p.blocked||0)>0?'<span class="light-bad"></span>':'<span class="light-ok"></span>');

function pbar(progress){
  const total=progress.total||0, done=progress.done||0;
  const pct=total?Math.round((done/total)*100):0;
  return `<div class='meta'>Progress ${done}/${total} (${pct}%)</div><div class='progress'><span style='width:${pct}%'></span></div>`;
}

async function renderList(){
  const ps=await j('/api/projects');
  const cards=[];
  for(const p of ps){
    const ov=await j(`${API}/projects/${p.id}/overview`);
    cards.push(`<div class='dept'><h4>${p.name}</h4><p class='meta'>${p.description||'-'}</p><p class='meta'>Dependencies: ${p.dependencies||'None'}</p><p class='meta'>${stLight(ov.progress)} ${p.status}</p>${pbar(ov.progress)}<div class='chips'><button class='btn' onclick="openProject('${p.id}')">Open</button><button class='btn' onclick="editProject('${p.id}')">Edit</button><button class='btn' onclick="delProject('${p.id}')">Delete</button></div></div>`);
  }
  document.getElementById('project-list').innerHTML=cards.join('')||'<div class="dept"><p class="meta">No projects.</p></div>';
}

window.openProject=async(id)=>{
  const d=await j(`${API}/projects/${id}/overview`);
  const people=d.people.length?d.people.join(', '):'No assignees yet';
  const tasks=d.tasks.map(t=>`<div class='task'><b>${t.title}</b><div class='meta'>${t.status} • assignee ${t.assignee||'Unassigned'} • start ${t.start_date||'n/a'} • due ${t.due_date||'n/a'}</div><div class='meta'>Depends on: ${t.depends_on||'none'}</div><div class='chips'><button class='btn' onclick="setStatus('${t.id}','in_progress')">Start</button><button class='btn' onclick="setStatus('${t.id}','done')">Done</button><button class='btn' onclick="editTask('${t.id}')">Edit</button><button class='btn' onclick="deleteTask('${t.id}')">Delete</button></div></div>`).join('')||'<p class="meta">No tasks</p>';
  document.getElementById('project-open').innerHTML=`<div class='dept'><h3>${d.project.name}</h3><p class='meta'><b>Description:</b> ${d.project.description||'-'}</p><p class='meta'><b>Dependencies:</b> ${d.project.dependencies||'-'}</p><p class='meta'><b>People:</b> ${people}</p><div class='chips'><span class='chip'>in_progress ${d.progress.in_progress}</span><span class='chip'>not started ${d.progress.todo}</span><span class='chip'>blocked ${d.progress.blocked}</span><span class='chip'>done ${d.progress.done}</span></div>${pbar(d.progress)}<h4 style='margin-top:10px'>Tasks & Subtasks</h4>${tasks}</div>`;
};

window.setStatus=async(id,status)=>{await j(`${API}/tasks/${id}/status`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})}); renderList();};
window.editTask=async(id)=>{const title=prompt('Task title'); if(title===null) return; const due=prompt('Due date (YYYY-MM-DD)','')||null; const dep=prompt('Depends on task id','')||null; await j(`${API}/tasks/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,due_date:due,depends_on:dep})}); renderList();};
window.deleteTask=async(id)=>{if(!confirm('Delete task?')) return; await j(`${API}/tasks/${id}`,{method:'DELETE'}); renderList();};

window.editProject=async(id)=>{
  const ps=await j('/api/projects'); const p=ps.find(x=>x.id===id); if(!p) return;
  const name=prompt('Project name',p.name); if(name===null) return;
  const description=prompt('Description',p.description||''); if(description===null) return;
  const dependencies=prompt('Dependencies',p.dependencies||''); if(dependencies===null) return;
  await j(`${API}/projects/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,dependencies})});
  renderList();
};
window.delProject=async(id)=>{if(!confirm('Delete project and its tasks?')) return; await j(`${API}/projects/${id}`,{method:'DELETE'}); document.getElementById('project-open').innerHTML=''; renderList();};

document.getElementById('add-project').onclick=async()=>{
  const name=document.getElementById('p-name').value.trim(); if(!name) return;
  const description=document.getElementById('p-desc').value.trim();
  const dependencies=document.getElementById('p-deps').value.trim();
  await j('/api/projects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,dependencies,owner:'Keith Anderson',status:'planning'})});
  document.getElementById('p-name').value='';document.getElementById('p-desc').value='';document.getElementById('p-deps').value='';
  renderList();
};

renderList();
