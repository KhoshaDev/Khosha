const API='/pm-api';
const KEY='keith_comments_v1';
const load=()=>JSON.parse(localStorage.getItem(KEY)||'[]');
const save=(v)=>localStorage.setItem(KEY,JSON.stringify(v));
async function render(){
  let items=[]; try { const r=await fetch(`${API}/comments`); if(!r.ok) throw 1; items=await r.json(); } catch { items=load(); }
  const el=document.getElementById('comment-list');
  el.innerHTML=(items.length?items:[{type:'system',id:'-',author:'System',body:'No comments yet',created_at:new Date().toISOString()}]).map(c=>`<div class="dept"><h4>${(c.type||'comment').toUpperCase()} · ${c.id}</h4><p class="meta">${c.author}: ${c.body||c.text}</p><p class="meta">${new Date(c.created_at||c.ts).toLocaleString()}</p></div>`).join('');
}
document.getElementById('c-add').onclick=async ()=>{const type=document.getElementById('c-type').value;const id=document.getElementById('c-id').value.trim();const author=document.getElementById('c-author').value.trim()||'Agent';const text=document.getElementById('c-text').value.trim();if(!id||!text)return;try{await fetch(`${API}/comments`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({project_id:type==='project'?id:null,task_id:type==='task'?id:null,author,body:text})});}catch{const items=load();items.unshift({type,id,author,text,ts:new Date().toISOString()});save(items);}['c-id','c-author','c-text'].forEach(i=>document.getElementById(i).value='');render();};
render();