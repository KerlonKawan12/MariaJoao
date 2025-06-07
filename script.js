tailwind.config = {
  theme: {
    extend: {
      colors: {
        marca: '#28444f' // substitua pelo azul da sua marca
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.classList.add('fade-out');
      }, 2500);
    });