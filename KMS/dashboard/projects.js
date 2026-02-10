const API='/api';
const KEY='keith_projects_v2';

async function fetchProjects(){
  try {
    const r=await fetch(`${API}/projects`);
    if(!r.ok) throw 1;
    return await r.json();
  } catch {
    return JSON.parse(localStorage.getItem(KEY)||'[]');
  }
}

function saveLocal(items){ localStorage.setItem(KEY, JSON.stringify(items)); }

async function bootstrapCEO(projectId){
  try {
    const r = await fetch(`${API}/projects/${projectId}/bootstrap-ceo`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({}) });
    if(!r.ok) throw new Error('bootstrap failed');
    const data = await r.json();
    alert(`CEO kickoff tasks created: ${data.created_tasks?.length||0}`);
  } catch {
    alert('Could not create CEO tasks from this client.');
  }
}

function card(p){
  const desc = p.description ? `<p class="meta"><strong>Description:</strong> ${p.description}</p>` : '';
  const scope = p.scope_summary ? `<p class="meta"><strong>Scope:</strong> ${p.scope_summary}</p>` : '';
  const ceo = `<p class="meta"><strong>CEO:</strong> ${p.ceo_owner || 'Keith Anderson'}</p>`;
  const btn = p.id ? `<button class="btn" data-bootstrap="${p.id}">Create CEO Execution Tasks</button>` : '';
  return `<div class="dept"><h4>${p.name}</h4><p class="meta">Owner: ${p.owner||'-'}</p><p class="meta">Status: ${p.status||'-'}</p>${ceo}${desc}${scope}${btn}</div>`;
}

async function render(){
  let items = await fetchProjects();
  if(!items.length){
    const seed=[{name:'Retailer OS',owner:'Keith Anderson',status:'in_progress',description:'Retail operations suite',scope_summary:'Stabilize core modules and deployment',ceo_owner:'Keith Anderson'}];
    saveLocal(seed);
    items = seed;
  }

  const el = document.getElementById('projects-list');
  el.innerHTML = (items.length?items:[{name:'No projects yet',owner:'-',status:'-'}]).map(card).join('');

  el.querySelectorAll('[data-bootstrap]').forEach(btn=>{
    btn.addEventListener('click',()=>bootstrapCEO(btn.getAttribute('data-bootstrap')));
  });
}

document.getElementById('add-project').addEventListener('click', async ()=>{
  const name=document.getElementById('p-name').value.trim(); if(!name) return;
  const owner=document.getElementById('p-owner').value.trim() || 'Unassigned';
  const status=document.getElementById('p-status').value;
  const description=document.getElementById('p-description').value.trim();
  const scope_summary=document.getElementById('p-scope').value.trim();
  const ceo_owner=document.getElementById('p-ceo').value.trim() || 'Keith Anderson';

  try {
    await fetch(`${API}/projects`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,owner,status,description,scope_summary,ceo_owner})
    });
  } catch {
    const items=JSON.parse(localStorage.getItem(KEY)||'[]');
    items.unshift({name,owner,status,description,scope_summary,ceo_owner});
    saveLocal(items);
  }

  document.getElementById('p-name').value='';
  document.getElementById('p-owner').value='';
  document.getElementById('p-description').value='';
  document.getElementById('p-scope').value='';
  render();
});

render();
