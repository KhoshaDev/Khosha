const API='/pm-api';
async function render(){
  const r=await fetch(`${API}/resources`);const items=r.ok?await r.json():[];
  document.getElementById('res-list').innerHTML=(items.length?items:[{name:'No resources',role:'-',type:'-'}]).map(x=>`<div class="dept"><h4>${x.name}</h4><p class="meta">${x.type} • ${x.role}</p><p class="meta">Start: ${x.start_date||'-'}</p><p class="meta">${x.job_description||''}</p></div>`).join('');
}
const rName=document.getElementById('r-name'),rRole=document.getElementById('r-role'),rType=document.getElementById('r-type'),rStart=document.getElementById('r-start'),rJd=document.getElementById('r-jd');
document.getElementById('add-res').onclick=async()=>{
  const payload={name:rName.value,role:rRole.value,type:rType.value,start_date:rStart.value,job_description:rJd.value};
  if(!payload.name||!payload.role)return;
  await fetch(`${API}/resources`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
  [rName,rRole,rStart,rJd].forEach(el=>el.value='');
  render();
};

document.getElementById('seed-team').onclick=async()=>{
  const today=new Date().toISOString().slice(0,10);
  const seed=[
    ['Keith Anderson','Project Manager','agent','Own end-to-end project governance and approvals.'],
    ['Dev-Lead-Agent','Development Manager','agent','Leads frontend, backend, fullstack and AI dev team.'],
    ['Frontend-Dev-Agent','Frontend Developer','agent','Builds UI and interactions.'],
    ['Backend-Dev-Agent','Backend Developer','agent','Builds APIs and service logic.'],
    ['Fullstack-Dev-Agent','Fullstack Developer','agent','Delivers cross-stack features.'],
    ['AI-Dev-Agent','AI Developer','agent','Builds AI capabilities and automation.'],
    ['Design-Lead-Agent','Design Manager','agent','Leads UI/AUI and UX design execution.'],
    ['AUI-Designer-Agent','AUI Designer','agent','Creates visual systems and interface polish.'],
    ['UX-Designer-Agent','UX Designer','agent','Designs user flows and usability improvements.'],
    ['DB-Lead-Agent','Database Manager','agent','Owns database architecture, reliability, and governance.']
  ];
  for(const [name,role,type,jd] of seed){
    await fetch(`${API}/resources`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,role,type,start_date:today,job_description:jd})});
  }
  render();
};
render();