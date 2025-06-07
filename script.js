setInterval(() => {
    location.reload();
  }, 30000);

  // Remove a tela de introdução após 2 segundos
  window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');

    setTimeout(() => {
      intro.classList.add('fade-out');

      // Remove do DOM após a transição (1 segundo)
      setTimeout(() => {
        intro.remove();
      }, 1000);
    }, 2000); // Espera 2 segundos antes de sumir
  });