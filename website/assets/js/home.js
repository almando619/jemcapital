if (window.location.pathname === `${Config.PATHNAME}/home`) {
  //swiper
  var swiper = null;

  //methods
  const initSwiper = () => {
    var _slidesPerView = 0;
    if ($(window).width() <= 600) {
      _slidesPerView = 1;
    } else if ($(window).width() > 600 && $(window).width() <= 750) {
      _slidesPerView = 2;
    } else if ($(window).width() > 750 && $(window).width() < 1080) {
      _slidesPerView = 3;
    } else {
      _slidesPerView = 4;
    }

    swiper = new Swiper(".services-swiper", {
      slidesPerView: _slidesPerView,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
  };

  //calls
  initSwiper();

  $(window).resize(() => {
    if ($(window).width() <= 600) {
      swiper.params.slidesPerView = 1;
    } else if ($(window).width() > 600 && $(window).width() <= 750) {
      swiper.params.slidesPerView = 2;
    } else if ($(window).width() > 750 && $(window).width() < 1080) {
      swiper.params.slidesPerView = 3;
    } else {
      swiper.params.slidesPerView = 4;
    }
  });
}
