$(".intro-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'ease',
  pauseOnHover: true,
  speed: 1000,
  prevArrow: '<div class="prev-1"></div>',
  nextArrow: '<div class="next-1"></div>',
});

$(".clients-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  prevArrow: '<div class="prev-2"></div>',
  nextArrow: '<div class="next-2"></div>',
});
