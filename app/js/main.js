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

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const crissCross = document.querySelector('.menu__cross');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active'))  { //Проверяем, есть ли у меню активный класс
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  crissCross.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    if (mobileMenu.classList.contains('menu--active'))  { //Проверяем, есть ли у меню активный класс
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
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



var mixer = mixitup('.categories__content');