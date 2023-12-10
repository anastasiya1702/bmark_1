$(function () {

  $('.menu__btn, .menu a').click(function (event) {
    $('.menu__btn, .menu__list').toggleClass('menu__list--active');
  });


  $('.search-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.search-tabs__top-item').removeClass('search-tabs__top-item--active');
    $(this).addClass('search-tabs__top-item--active');

    $('.search-tabs__content-item').removeClass('search-tabs__content-item--active');
    $($(this).attr('href')).addClass('search-tabs__content-item--active');
  });


  $('.properties-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.properties-tabs__top-item').removeClass('properties-tabs__top-item--active');
    $(this).addClass('properties-tabs__top-item--active');

    $('.properties-tabs__content-item').removeClass('properties-tabs__content-item--active');
    $($(this).attr('href')).addClass('properties-tabs__content-item--active');
  });
  

  $('.slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    nextArrow: '<button type="button" class="slick-next"><img src="img/svg/arrow.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/svg/arrow.svg"alt="prevarrow"></button>',
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

});