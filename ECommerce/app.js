const phones = [
  { name: 'iPhone 15', spec: '128GB • Midnight', price: '₹74,900' },
  { name: 'Samsung Galaxy S24', spec: '256GB • Phantom Black', price: '₹79,999' },
  { name: 'OnePlus 12', spec: '12GB/256GB', price: '₹64,999' },
  { name: 'Nothing Phone (2)', spec: '12GB/256GB', price: '₹39,999' },
];

const electronics = [
  { name: 'Sony WH-1000XM5', spec: 'Noise Cancelling Headphones', price: '₹29,990' },
  { name: 'Samsung 4K Smart TV', spec: '55-inch UHD', price: '₹54,999' },
  { name: 'JBL PartyBox', spec: 'Portable Speaker', price: '₹24,999' },
  { name: 'Apple Watch Series 9', spec: 'GPS 45mm', price: '₹41,900' },
];

function card(p, tag) {
  return `<article class="card">
    <span class="tag">${tag}</span>
    <h3>${p.name}</h3>
    <p class="meta">${p.spec}</p>
    <div class="price">${p.price}</div>
    <button onclick="alert('Cart flow can be connected next.')">Add to Cart</button>
  </article>`;
}

document.getElementById('phone-grid').innerHTML = phones.map((p) => card(p, 'mobile')).join('');
document.getElementById('electronics-grid').innerHTML = electronics.map((p) => card(p, 'electronics')).join('');
