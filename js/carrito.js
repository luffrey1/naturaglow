// NaturaGlow - carrito.js
let carrito = [];

function abrirCarrito() {
  document.getElementById('carrito-modal').classList.add('open');
}
function cerrarCarrito() {
  document.getElementById('carrito-modal').classList.remove('open');
}
function agregarAlCarrito(producto) {
  carrito.push(producto);
  renderizarCarrito();
  abrirCarrito();
}
function renderizarCarrito() {
  const cont = document.getElementById('carrito-lista');
  cont.innerHTML = '';
  let total = 0;
  carrito.forEach((prod, i) => {
    total += prod.precio;
    cont.innerHTML += `<div class='carrito-item'><img src='${prod.img}' alt='${prod.nombre}'><span>${prod.nombre}</span><span>€${prod.precio.toFixed(2)}</span></div>`;
  });
  document.getElementById('carrito-total').textContent = '€' + total.toFixed(2);
}
// Para pruebas, puedes usar:
// agregarAlCarrito({nombre:'Crema Argán', precio:19.9, img:'../assets/img/crema-argan.jpg'}); 