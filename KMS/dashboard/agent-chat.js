const API='/api';
const KEY='keith_agent_chat_v1';
const load=()=>JSON.parse(localStorage.getItem(KEY)||'[]');
const save=(v)=>localStorage.setItem(KEY,JSON.stringify(v));
async function render(){let items=[];try{const r=await fetch(`${API}/chat`);if(!r.ok) throw 1;items=await r.json();}catch{items=load();}
const el=document.getElementById('chat-list');el.innerHTML=(items.length?items:[{agent:'System',message:'No messages yet',created_at:new Date().toISOString()}]).map(m=>`<div class="dept"><h4>${m.agent}</h4><p class="meta">${m.message||m.text}</p><p class="meta">${new Date(m.created_at||m.ts).toLocaleString()}</p></div>`).join('');}
document.getElementById('chat-send').onclick=async ()=>{const agent=document.getElementById('chat-agent').value;const text=document.getElementById('chat-text').value.trim();if(!text)return;try{await fetch(`${API}/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({agent,message:text})});}catch{const items=load();items.unshift({agent,text,ts:new Date().toISOString()});save(items);}document.getElementById('chat-text').value='';render();};
render();