const API='/api';
async function projects(){const r=await fetch(`${API}/projects`);return r.ok?await r.json():[]}
async function resources(){const r=await fetch(`${API}/resources`);return r.ok?await r.json():[]}
async function taskList(projectId){const r=await fetch(`${API}/projects/${projectId}/tasks`);return r.ok?await r.json():[]}
async function subList(taskId){const r=await fetch(`${API}/tasks/${taskId}/subtasks`);return r.ok?await r.json():[]}

async function loadAssignees(){
  const rs = await resources();
  const sel = document.getElementById('task-assignee');
  sel.innerHTML = '<option value="">Unassigned</option>' + rs.map(r=>`<option>${r.name}</option>`).join('');
}

async function render(){
  const ps=await projects();
  const el=document.getElementById('tasks-list');
  let html='';
  for(const p of ps){
    const ts=await taskList(p.id);
    html+=`<div class="dept"><h4>${p.name} <span class="meta">(${p.id})</span></h4>${ts.map(t=>`<div class="task"><b>${t.title}</b><div class="meta">${t.id} • ${t.status} • ${t.assignee||'Unassigned'} • ${t.approved?'Approved':'Pending Approval'}</div>${t.github_issue_url?`<div class="meta">GitHub: <a class="link" target="_blank" href="${t.github_issue_url}">#${t.github_issue_number}</a></div>`:''}<div class="chips"><button class="btn" onclick="approve('${t.id}')">Approve</button><button class="btn" onclick="pick('${t.id}')">Pick Up</button><button class="btn" onclick="move('${t.id}','in_progress')">Start</button><button class="btn" onclick="move('${t.id}','done')">Done</button></div><div class="meta" id="sub-${t.id}"></div></div>`).join('')||'<p class="meta">No tasks yet</p>'}</div>`;
  }
  el.innerHTML=html||'<div class="dept"><p class="meta">No projects/tasks yet.</p></div>';
  for(const p of ps){const ts=await taskList(p.id);for(const t of ts){const s=await subList(t.id);const n=document.getElementById(`sub-${t.id}`);if(n)n.textContent=`Subtasks: ${s.map(x=>x.title).join(' | ')||'none'}`;}}
}

window.approve=async(id)=>{await fetch(`${API}/tasks/${id}/approve`,{method:'POST'});render();}
window.pick=async(id)=>{const assignee=prompt('Assign to resource name:'); if(!assignee) return; await fetch(`${API}/tasks/${id}/assign`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({assignee})}); render();}
window.move=async(id,status)=>{await fetch(`${API}/tasks/${id}/status`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});render();}

document.getElementById('add-task').onclick=async()=>{
  const project_id=document.getElementById('project-id').value.trim();
  const title=document.getElementById('task-title').value.trim();
  const assignee=document.getElementById('task-assignee').value || null;
  if(!project_id||!title)return;
  await fetch(`${API}/projects/${project_id}/tasks`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,assignee})});
  document.getElementById('task-title').value='';
  render();
}

document.getElementById('add-subtask').onclick=async()=>{
  const taskId=document.getElementById('task-id').value.trim();
  const title=document.getElementById('subtask-title').value.trim();
  if(!taskId||!title)return;
  await fetch(`${API}/tasks/${taskId}/subtasks`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title})});
  document.getElementById('subtask-title').value='';
  render();
}

document.getElementById('gh-config').onclick=async()=>{
  const owner=document.getElementById('gh-owner').value.trim();
  const repo=document.getElementById('gh-repo').value.trim();
  const tokenInput=document.getElementById('gh-token-env');
  const token_env_var=(tokenInput?tokenInput.value.trim():'')||'GITHUB_TOKEN';
  if(!owner||!repo) return;
  const r=await fetch(`${API}/integrations/github/config`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({owner,repo,token_env_var})});
  document.getElementById('gh-status').textContent = r.ok ? 'GitHub config saved.' : 'GitHub config failed.';
}
document.getElementById('gh-export').onclick=async()=>{
  const r=await fetch(`${API}/sync/github/export-approved`,{method:'POST'}); const j=await r.json();
  const n = j.exported ?? j.exported_count ?? 0;
  document.getElementById('gh-status').textContent = r.ok ? `Exported ${n} task(s)` : (j.error||'Export failed');
  render();
}
document.getElementById('gh-import').onclick=async()=>{
  const r=await fetch(`${API}/sync/github/import-status`,{method:'POST'}); const j=await r.json();
  document.getElementById('gh-status').textContent = r.ok ? `Imported status for ${j.updated} task(s)` : (j.error||'Import failed');
  render();
}

const suggestBtn = document.getElementById('suggest-assignee');
if (suggestBtn) {
  suggestBtn.onclick=async()=>{
    const taskId=document.getElementById('suggest-task-id').value.trim(); if(!taskId) return;
    const r=await fetch(`${API}/tasks/${taskId}/suggest-assignee`,{method:'POST'}); const j=await r.json();
    const role = j.suggestedRole || j.reason || 'Suggestion';
    const assignee = j.suggestedAssignee || j.suggested_assignee || 'No match';
    const out = document.getElementById('suggest-out');
    if (out) out.textContent = r.ok ? `${role}: ${assignee}` : (j.error||'Suggestion failed');
  }
}

loadAssignees();
render();