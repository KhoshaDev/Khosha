const KEY='screen_sales_orders_v1';
const $=id=>document.getElementById(id);
const now=()=>new Date().toISOString();
let orders=JSON.parse(localStorage.getItem(KEY)||'[]');

function save(){localStorage.setItem(KEY,JSON.stringify(orders));render();}
function money(n){return `₹${Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2})}`;}
function total(o){return Number(o.qty||0)*Number(o.unitPrice||0);}

function render(){
  const q=($('search').value||'').toLowerCase().trim();
  const view=orders.filter(o=>`${o.customer} ${o.screenType}`.toLowerCase().includes(q));
  $('rows').innerHTML=view.map(o=>`<tr>
    <td>${new Date(o.createdAt).toLocaleDateString()}</td>
    <td>${o.customer}</td><td>${o.screenType||'-'}</td><td>${o.qty}</td>
    <td>${money(o.unitPrice)}</td><td>${money(total(o))}</td>
    <td><span class="badge ${o.stage}">${o.stage}</span></td>
    <td><span class="badge ${o.payment}">${o.payment}</span></td>
    <td><button class="del" onclick="removeOrder('${o.id}')">Delete</button></td>
  </tr>`).join('') || '<tr><td colspan="9">No entries</td></tr>';

  const k={
    entries:orders.length,
    leads:orders.filter(o=>o.stage==='lead'||o.stage==='quoted').length,
    orders:orders.filter(o=>o.stage==='ordered'||o.stage==='delivered').length,
    revenue:orders.filter(o=>o.payment==='paid').reduce((a,b)=>a+total(b),0),
    pending:orders.filter(o=>o.payment!=='paid').reduce((a,b)=>a+total(b),0)
  };
  $('kpis').innerHTML=`
    <div class='card'><div>Total Entries</div><div class='kv'>${k.entries}</div></div>
    <div class='card'><div>Active Leads</div><div class='kv'>${k.leads}</div></div>
    <div class='card'><div>Sales Orders</div><div class='kv'>${k.orders}</div></div>
    <div class='card'><div>Paid Revenue</div><div class='kv'>${money(k.revenue)}</div></div>
    <div class='card'><div>Pending Value</div><div class='kv'>${money(k.pending)}</div></div>`;
}

window.removeOrder=(id)=>{orders=orders.filter(o=>o.id!==id);save();};
$('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  orders.unshift({
    id:crypto.randomUUID(),createdAt:now(),
    customer:$('customer').value.trim(),phone:$('phone').value.trim(),
    screenType:$('screenType').value.trim(),qty:Number($('qty').value||1),
    unitPrice:Number($('unitPrice').value||0),stage:$('stage').value,payment:$('payment').value,
    notes:$('notes').value.trim()
  });
  e.target.reset(); $('qty').value=1; save();
});
$('search').addEventListener('input',render);
render();
