// NaturaGlow - main.js
// Animaciones de entrada y scroll reveal

document.addEventListener('DOMContentLoaded', function() {
  // Animación fade-in para secciones
  document.querySelectorAll('.fade-in').forEach(function(el, i) {
    setTimeout(() => el.classList.add('visible'), 200 + i * 200);
  });

  // Scroll reveal para .reveal
  const revealEls = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    revealEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Modo oscuro
  const darkBtn = document.getElementById('dark-toggle');
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('nglow-dark', document.body.classList.contains('dark'));
    });
    // Persistencia
    if (localStorage.getItem('nglow-dark') === 'true') {
      document.body.classList.add('dark');
    }
  }
}); 