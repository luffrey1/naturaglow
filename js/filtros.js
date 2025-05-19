// NaturaGlow - filtros.js
function filtrarProductos() {
  const cat = document.getElementById('filtro-categoria').value;
  const min = parseFloat(document.getElementById('filtro-min').value) || 0;
  const max = parseFloat(document.getElementById('filtro-max').value) || 999;
  document.querySelectorAll('.producto-card').forEach(card => {
    const precio = parseFloat(card.getAttribute('data-precio'));
    const categoria = card.getAttribute('data-categoria');
    if ((cat === 'todas' || categoria === cat) && precio >= min && precio <= max) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const filtros = document.querySelectorAll('.filtro');
  filtros.forEach(f => f.addEventListener('change', filtrarProductos));
}); 