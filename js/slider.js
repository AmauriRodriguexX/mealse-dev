document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.marcas-swiper', {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    allowTouchMove: true,
  });
});


//MARK: close sidenav

document.addEventListener('DOMContentLoaded', function() {
    const offcanvasEl = document.getElementById('mainOffcanvas');
    // Crea o recupera la instancia de Bootstrap Offcanvas
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

    offcanvasEl.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();                  // 1) evita el salto inmediato
        const targetHash = this.getAttribute('href');

        // 2) cuando termine de ocultarse, hacemos scroll
        const onHidden = () => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
            // opcional: actualiza el hash en la URL sin forzar otro salto
            history.replaceState(null, '', targetHash);
          }
          offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);
        };
        offcanvasEl.addEventListener('hidden.bs.offcanvas', onHidden);

        // 3) cierra el Offcanvas
        bsOffcanvas.hide();
      });
    });
  });

//MARK: smooth scroll to section
document.addEventListener('DOMContentLoaded', function() {
    const offcanvasEl = document.getElementById('mainOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    const OFFSET = 70; // píxeles que quieres “ahorrar” arriba

    offcanvasEl.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetHash = this.getAttribute('href');

        const onHidden = () => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            const elementTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
            // Restamos siempre 70px en lugar de la altura dinámica
            window.scrollTo({ top: elementTop - OFFSET, behavior: 'smooth' });
            history.replaceState(null, '', targetHash);
          }
          offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);
        };

        offcanvasEl.addEventListener('hidden.bs.offcanvas', onHidden);
        bsOffcanvas.hide();
      });
    });
  });
