$(function() {
  $('.comments__inner').slick({
    arrows: true,
    dots: true,
    
  });
});

let header = document.querySelector(".header"),
    headerH = document.querySelector('.header').clientHeight

document.onscroll = function() {
  let scroll = window.scrollY;
  if (scroll > headerH) {
    header.classList.add("header__js");
  }
  if (scroll < headerH) {
    header.classList.remove("header__js");
  }
}





var mixer = mixitup('.categories__content');