$(function() {
  $('.comments__inner').slick({
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slide__arrow slide__arrow--prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button>',
    nextArrow: '<button type="button" class="slide__arrow slide__arrow--next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button>',
    appendArrows: '.arrows-wrap',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        },
      }
    ],
  });
  
});

$('').ionRangeSlider({
  type: 'double'
});

var $range = $(".catalog__price-input");
  var $inputFrom = $(".catalog__price-price--from");
  var $inputTo = $(".catalog__price-price--to");
  var instance;
  var min = 50;
  var max = 1100;
  var from = 0;
  var to = 0;
  
  $range.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 100,
      to: 1000,
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");
  
  function updateInputs (data) {
      from = data.from;
      to = data.to;
  
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
  }
  
  $inputFrom.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
  
      instance.update({
          from: val
      });
  
      $(this).prop("value", val);
  
  });
  
  $inputTo.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
  
      instance.update({
          to: val
      });
  
      $(this).prop("value", val);
  });
$('.catalog__top-select').styler();



$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.restaurant__content:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $('.restaurant__content.slick-initialized').slick('unslick');
  }
});

$(window).on('load resize', function () {
  if ($(window).width() < 992) {
    $('.discount__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $('.discount__list.slick-initialized').slick('unslick');
  }
});

$('.desc__tab').on('click', function(e){
  e.preventDefault();
  $('.desc__tab').removeClass('desc__tab--active');

  $(this).addClass('desc__tab--active');

  $('.desc__content-item').removeClass('desc__content-item--active');
  $($(this).attr('href')).addClass('desc__content-item--active');

});



$(window).on('load resize', function () {
  if ($(window).width() < 10000) {
    $('.product__photos:not(.slick-initialized)').slick({
      arrows: true,
      prevArrow: '<button type="button" class="product__arrow product__arrow--prev"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384665 15.2262L16.398 0.839919C16.9234 0.324519 17.7756 0.324519 18.3011 0.839919C18.8266 1.35528 18.8266 2.19151 18.3011 2.70691L3.25336 16.2267L18.2998 29.7465C18.8253 30.2619 18.8253 31.0981 18.2998 31.6135C17.7743 32.1288 16.9221 32.1288 16.3967 31.6135L0.38333 17.2272C0.103261 16.9525 -0.0168133 16.5883 0.00189296 16.228C-0.0155205 15.8665 0.104515 15.5023 0.384665 15.2262Z" fill="#363853"/></svg></button>',
      nextArrow: '<button type="button" class="product__arrow product__arrow--next"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.7728L2.29726 0.38655C1.77178 -0.12885 0.919578 -0.12885 0.394105 0.38655C-0.131368 0.90191 -0.131369 1.73814 0.394104 2.25354L15.4418 15.7734L0.395433 29.2931C-0.130041 29.8085 -0.130041 30.6447 0.395432 31.1601C0.920905 31.6755 1.77311 31.6755 2.29854 31.1601L18.3119 16.7739C18.5919 16.4991 18.712 16.1349 18.6933 15.7747C18.7107 15.4131 18.5907 15.0489 18.3105 14.7728Z" fill="#363853"/></svg></button>',
      dots: false,
      infinite: true,
      speed: 100,
      appendArrows: '.arrows-wrapper',
      slidesToShow: 1
    });
  } else {
    $('.product__photos.slick-initialized').slick('unslick');
  }
});

$(window).on('load resize', function () {
  if ($(window).width() < 10000) {
    $('.product-open__photos:not(.slick-initialized)').slick({
      arrows: true,
      prevArrow: '<button type="button" class="product-open__arrow product-open__arrow--prev"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384665 15.2262L16.398 0.839919C16.9234 0.324519 17.7756 0.324519 18.3011 0.839919C18.8266 1.35528 18.8266 2.19151 18.3011 2.70691L3.25336 16.2267L18.2998 29.7465C18.8253 30.2619 18.8253 31.0981 18.2998 31.6135C17.7743 32.1288 16.9221 32.1288 16.3967 31.6135L0.38333 17.2272C0.103261 16.9525 -0.0168133 16.5883 0.00189296 16.228C-0.0155205 15.8665 0.104515 15.5023 0.384665 15.2262Z" fill="#363853"/></svg></button>',
      nextArrow: '<button type="button" class="product-open__arrow product-open__arrow--next"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.7728L2.29726 0.38655C1.77178 -0.12885 0.919578 -0.12885 0.394105 0.38655C-0.131368 0.90191 -0.131369 1.73814 0.394104 2.25354L15.4418 15.7734L0.395433 29.2931C-0.130041 29.8085 -0.130041 30.6447 0.395432 31.1601C0.920905 31.6755 1.77311 31.6755 2.29854 31.1601L18.3119 16.7739C18.5919 16.4991 18.712 16.1349 18.6933 15.7747C18.7107 15.4131 18.5907 15.0489 18.3105 14.7728Z" fill="#363853"/></svg></button>',
      dots: true,
      infinite: true,
      speed: 100,
      appendArrows: '.arrows-open-wrapper',
      slidesToShow: 1
    });
  } else {
    $('.product__photos.slick-initialized').slick('unslick');
  };
  if ($(window).width() < 1230) {
    $('.product__photos.slick-initialized').slick('unslick');
  }
});

$(window).on('load resize', function () {
  if ($(window).width() < 10000) {
    $('.maybe__content:not(.slick-initialized)').slick({
      arrows: true,
      prevArrow: '<button type="button" class="maybe__arrow maybe__arrow--prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button>',
      nextArrow: '<button type="button" class="maybe__arrow maybe__arrow--next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button>',
      dots: false,
      infinite: true,
      speed: 100,
      appendArrows: '.maybe-arrows',
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 992, // - от какой ширины изменять настройки(1024 и ниже)
          settings: { 
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 677, // - от какой ширины изменять настройки(1024 и ниже)
          settings: { 
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 576, // - от какой ширины изменять настройки(1024 и ниже)
          settings: { 
            slidesToShow: 2 ,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  } else {
    $('.product__photos.slick-initialized').slick('unslick');
  };
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const crissCross = document.querySelector('.menu__cross');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('menu--active'); //когда меню открыто
    bodyLock.classList.add('lock');
  });

  crissCross.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  }); 

  
});

document.addEventListener('DOMContentLoaded', () => {

  const filterBtn = document.querySelector('.catalog__top-btn');
  const filterMob = document.querySelector('.filter-mobile');
  const bodyLock = document.querySelector('body');
  const filterCross = document.querySelector('.filter__cross');
  

  filterBtn.addEventListener('click', function(){
    filterMob.classList.toggle('open');
    if (filterMob.classList.contains('open')) {
      bodyLock.classList.add('filter-lock');
    }
    else {
      bodyLock.classList.remove('filter-lock');
    }
  });

  filterCross.addEventListener('click', function(){
    filterMob.classList.remove('open');
  });

  filterCross.addEventListener('click', function(){
    bodyLock.classList.remove('filter-lock');
  });

  

});

document.addEventListener('DOMContentLoaded', () => {
  const productImg = document.querySelectorAll('.product__img');
  const bodyLock = document.querySelector('body');
  const productOpen = document.querySelector('.product-slide');
  const productCross = document.querySelector('.product__cross');
  
  

  if( window.innerHeight > 800 && window.innerWidth > 1200 ){
    for(const item of productImg) {
    item.addEventListener('click', function(){
      bodyLock.classList.add('product__lock');
      productOpen.classList.add('product-slide--open');
    });
  };
  

  productCross.addEventListener('click', function(){
    bodyLock.classList.remove('product__lock');
    productOpen.classList.remove('product-slide--open');
  });
  };
});

var mixer = mixitup('.categories__content');

