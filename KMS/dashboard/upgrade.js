const API='/api';
const TARGET_PROJECT='proj_1770729925563_9vv645';

const etaByStatus = {
  todo: '1-3 days depending on wave',
  in_progress: 'In active execution (hours to 1 day)',
  review: 'Awaiting approval',
  done: 'Completed'
};

async function getJson(url){ const r=await fetch(url); return r.ok?await r.json():[]; }

function groupBy(arr,key){ return arr.reduce((a,c)=>((a[c[key]||'Unassigned']=(a[c[key]||'Unassigned']||[]).concat(c)),a),{}); }

async function render(){
  const projects = await getJson(`${API}/projects`);
  const project = projects.find(p=>p.id===TARGET_PROJECT) || projects[0];
  if(!project){
    document.getElementById('snapshot').textContent='No project found';
    return;
  }
  const tasks = await getJson(`${API}/projects/${project.id}/tasks`);

  const counts = tasks.reduce((a,t)=>{ a[t.status]=(a[t.status]||0)+1; return a; },{});
  document.getElementById('snapshot').innerHTML = `
    <p><strong>Project:</strong> ${project.name}</p>
    <p><strong>Status:</strong> ${project.status}</p>
    <p><strong>Total Tasks:</strong> ${tasks.length}</p>
    <p><strong>Todo:</strong> ${counts.todo||0} • <strong>In Progress:</strong> ${counts.in_progress||0} • <strong>Done:</strong> ${counts.done||0}</p>
  `;

  const byAssignee = groupBy(tasks,'assignee');
  document.getElementById('assignee-load').innerHTML = Object.entries(byAssignee).map(([name,list])=>{
    const inProg = list.filter(x=>x.status==='in_progress').length;
    const todo = list.filter(x=>x.status==='todo').length;
    const done = list.filter(x=>x.status==='done').length;
    const eta = inProg?etaByStatus.in_progress:(todo?etaByStatus.todo:etaByStatus.done);
    return `<div class="dept"><h4>${name}</h4><p class="meta">Tasks: ${list.length} | todo ${todo} | in_progress ${inProg} | done ${done}</p><p class="meta"><strong>ETA:</strong> ${eta}</p></div>`;
  }).join('') || '<div class="dept"><p class="meta">No assignees yet.</p></div>';

  document.getElementById('task-pipeline').innerHTML = tasks.map(t=>`<div class="dept"><h4>${t.title}</h4><p class="meta">${t.assignee||'Unassigned'} • ${t.status}</p><p class="meta">ETA hint: ${etaByStatus[t.status]||'TBD'}</p></div>`).join('');
}

render();
