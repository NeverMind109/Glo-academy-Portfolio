// WOW библиотека
    new WOW().init();


// Swiper slider
const swiper = new Swiper('.projects__slider', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true,
      },
  });