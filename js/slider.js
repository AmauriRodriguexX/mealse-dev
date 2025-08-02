document.addEventListener('DOMContentLoaded', () => {
    // 1) Inicializa tu Swiper
    new Swiper('.marcas-swiper', {
      loop: true,
      autoplay: { delay: 7000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      allowTouchMove: true,
    });

    // 2) Prepara Offcanvas + Smooth Scroll con offset fijo
    const offcanvasEl = document.getElementById('mainOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    const OFFSET = 70; // px que dejamos libre bajo el header

    offcanvasEl.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetHash = link.getAttribute('href');

        // Esperar a que termine de cerrar
        const onHidden = () => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            // Calcula la posición real menos OFFSET
            const top = targetEl.getBoundingClientRect().top + window.pageYOffset - OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
            history.replaceState(null, '', targetHash);
          }
          offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);
        };
        offcanvasEl.addEventListener('hidden.bs.offcanvas', onHidden);

        // Cierra el menú
        bsOffcanvas.hide();
      });
    });
  });

  // 3) Corrige el auto-scroll inicial si la URL trae #sectionX
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    const OFFSET = 70;
    if (hash) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
            const top = targetEl.getBoundingClientRect().top + window.pageYOffset - OFFSET;
            window.scrollTo({ top, behavior: 'auto' });
            
            // <-- DESCOMENTA ESTA LÍNEA -->
            history.replaceState(null, '', window.location.pathname);
        }
    }
});