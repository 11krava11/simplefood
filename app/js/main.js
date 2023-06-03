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



let header = document.querySelector(".header"),
    headerH = document.querySelector('.header').clientHeight

document.onscroll = function() {
  let scroll = window.scrollY;
  if (scroll > headerH) {
    header.classList.add("header--js");
  }
  if (scroll < headerH) {
    header.classList.remove("header--js");
  }
}

document.addEventListener('DOMContentLoaded', () => {
	//DOMContentLoaded означает, когда наш документ будет готов к работе, тогда начнут работать наши скрипты
  
	//Mobile Menu
  const burger = document.querySelector('.burger'); //находим наш бургер по селектору класса
  const cross = document.querySelector('menu__cross');
  
  burger.addEventListener('click', () => {
	//Добавляем событие "клик" на бургер

  menu.classList.add('menu--active'); //при клике на бургер у нас будет либо добавлятся класс, либо удаляется.
		//ВАЖНО! Мы уже работаем с данным классом, поэтому тут "." не ставим, иначе в атрибут class значение добавится с "." и работать не будет.
  
  });

  cross.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
  });

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





var mixer = mixitup('.categories__content');