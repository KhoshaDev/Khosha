const API='http://127.0.0.1:8787';
const KEY='keith_projects_v1';
async function fetchProjects(){ try { const r=await fetch(`${API}/projects`); if(!r.ok) throw 1; return await r.json(); } catch { return JSON.parse(localStorage.getItem(KEY)||'[]'); } }
function saveLocal(items){ localStorage.setItem(KEY, JSON.stringify(items)); }
async function render(){
  const items = await fetchProjects();
  if(!items.length){ const seed=[{name:'Retailer OS',owner:'Keith Anderson',status:'in_progress'}]; saveLocal(seed); }
  const list = (items.length?items:JSON.parse(localStorage.getItem(KEY)||'[]'));
  const el = document.getElementById('projects-list');
  el.innerHTML = (list.length?list:[{name:'No projects yet',owner:'-',status:'-'}]).map(p=>`<div class="dept"><h4>${p.name}</h4><p class="meta">Owner: ${p.owner||'-'}</p><p class="meta">Status: ${p.status||'-'}</p></div>`).join('');
}
document.getElementById('add-project').addEventListener('click', async ()=>{
  const name=document.getElementById('p-name').value.trim(); if(!name) return;
  const owner=document.getElementById('p-owner').value.trim() || 'Unassigned';
  const status=document.getElementById('p-status').value;
  try { await fetch(`${API}/projects`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,owner,status})}); }
  catch { const items=JSON.parse(localStorage.getItem(KEY)||'[]'); items.unshift({name,owner,status}); saveLocal(items); }
  document.getElementById('p-name').value=''; document.getElementById('p-owner').value='';
  render();
});
render();