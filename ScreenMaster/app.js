const KEY='screen_master_orders_v1';
const $=id=>document.getElementById(id);
let orders=JSON.parse(localStorage.getItem(KEY)||'[]');

const money=n=>`₹${Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2})}`;
const total=o=>Number(o.qty||0)*Number(o.unitPrice||0);
const chip=(t)=>({lead:'bg-slate-500/20 text-slate-300',quoted:'bg-blue-500/20 text-blue-300',ordered:'bg-violet-500/20 text-violet-300',delivered:'bg-emerald-500/20 text-emerald-300',unpaid:'bg-red-500/20 text-red-300',partial:'bg-amber-500/20 text-amber-300',paid:'bg-emerald-500/20 text-emerald-300'}[t]||'bg-slate-500/20 text-slate-300');

function render(){
  const q=($('search').value||'').toLowerCase().trim();
  const list=orders.filter(o=>`${o.customer} ${o.screenType}`.toLowerCase().includes(q));

  $('rows').innerHTML=list.map(o=>`<article class='rounded-lg border border-line p-2'>
    <div class='flex items-start justify-between gap-2'><b class='text-sm'>${o.customer}</b><button onclick="del('${o.id}')" class='text-[11px] px-2 py-0.5 rounded bg-red-600/80'>Delete</button></div>
    <p class='text-[11px] text-slate-400 mt-1'>${o.screenType||'-'} • Qty ${o.qty} • Unit ${money(o.unitPrice)} • Total ${money(total(o))}</p>
    <div class='flex gap-2 mt-2 flex-wrap'><span class='text-[10px] px-2 py-0.5 rounded ${chip(o.stage)}'>${o.stage}</span><span class='text-[10px] px-2 py-0.5 rounded ${chip(o.payment)}'>${o.payment}</span><span class='text-[10px] text-slate-500'>${new Date(o.createdAt).toLocaleDateString()}</span></div>
  </article>`).join('') || `<p class='text-xs text-slate-400'>No entries yet.</p>`;

  const k={
    entries:orders.length,
    leads:orders.filter(o=>['lead','quoted'].includes(o.stage)).length,
    sales:orders.filter(o=>['ordered','delivered'].includes(o.stage)).length,
    paid:orders.filter(o=>o.payment==='paid').reduce((a,b)=>a+total(b),0),
    pending:orders.filter(o=>o.payment!=='paid').reduce((a,b)=>a+total(b),0),
  };

  $('kpis').innerHTML=`
    <div class='rounded-xl bg-primary p-3'><p class='text-[11px] text-white/80'>Total Entries</p><p class='text-2xl font-bold'>${k.entries}</p></div>
    <div class='rounded-xl bg-surface border border-line p-3'><p class='text-[11px] text-slate-400'>Active Leads</p><p class='text-2xl font-bold'>${k.leads}</p></div>
    <div class='rounded-xl bg-surface border border-line p-3'><p class='text-[11px] text-slate-400'>Sales Orders</p><p class='text-2xl font-bold'>${k.sales}</p></div>
    <div class='rounded-xl bg-surface border border-line p-3'><p class='text-[11px] text-slate-400'>Paid Revenue</p><p class='text-lg font-bold'>${money(k.paid)}</p><p class='text-[10px] text-slate-500'>Pending ${money(k.pending)}</p></div>`;

  localStorage.setItem(KEY, JSON.stringify(orders));
}

window.del=(id)=>{orders=orders.filter(x=>x.id!==id);render();};
$('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  orders.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    customer: $('customer').value.trim(),
    phone: $('phone').value.trim(),
    screenType: $('screenType').value.trim(),
    qty: Number($('qty').value||1),
    unitPrice: Number($('unitPrice').value||0),
    stage: $('stage').value,
    payment: $('payment').value,
    notes: $('notes').value.trim(),
  });
  e.target.reset(); $('qty').value=1; render();
});
$('search').addEventListener('input', render);
render();
