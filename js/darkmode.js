// NaturaGlow - darkmode.js
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('nglow-dark', document.body.classList.contains('dark'));
}
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('nglow-dark') === 'true') {
    document.body.classList.add('dark');
  }
  const btn = document.getElementById('dark-toggle');
  if (btn) btn.addEventListener('click', toggleDarkMode);
}); 