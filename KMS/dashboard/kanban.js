const KEY='keith_kanban_v2';
const laneOrder=['todo','in_progress','review','done'];

async function getData(){
  const saved=localStorage.getItem(KEY);
  if(saved) return JSON.parse(saved);
  const res=await fetch('./data/kanban.sample.json');
  const data=await res.json();
  localStorage.setItem(KEY, JSON.stringify(data));
  return data;
}
function saveData(data){localStorage.setItem(KEY, JSON.stringify(data));}

function card(t){
  return `<div class="task" draggable="true" data-id="${t.id}"><b>${t.id} · ${t.title}</b><div class="meta">Owner: ${t.owner||'Unassigned'}</div><div class="meta">Priority: ${t.priority||'-'}</div></div>`;
}

function renderBoard(data){
  const lanes=data.lanes||{};
  const board=document.getElementById('board');
  board.innerHTML=laneOrder.map(k=>{
    const items=lanes[k]||[];
    return `<div class="lane" data-lane="${k}"><h3>${k.replace('_',' ').toUpperCase()} (${items.length})</h3><div class="dropzone">${items.map(card).join('')}</div></div>`;
  }).join('');

  document.querySelectorAll('.task').forEach(el=>{
    el.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain', el.dataset.id);});
  });
  document.querySelectorAll('.dropzone').forEach(zone=>{
    zone.addEventListener('dragover',e=>e.preventDefault());
    zone.addEventListener('drop',e=>{
      e.preventDefault();
      const id=e.dataTransfer.getData('text/plain');
      const lane=e.target.closest('.lane').dataset.lane;
      moveCard(data,id,lane);
      saveData(data);
      renderBoard(data);
    });
  });
}

function moveCard(data,id,toLane){
  let found=null;
  for(const k of laneOrder){
    const arr=data.lanes[k]||[];
    const idx=arr.findIndex(x=>x.id===id);
    if(idx>=0){found=arr.splice(idx,1)[0];break;}
  }
  if(!found) return;
  data.lanes[toLane]=data.lanes[toLane]||[];
  data.lanes[toLane].unshift(found);
}

(async function(){
  const data=await getData();
  renderBoard(data);
})();