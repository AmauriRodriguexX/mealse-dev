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
