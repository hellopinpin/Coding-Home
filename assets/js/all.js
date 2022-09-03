"use strict";

var swiper = new Swiper(".languageSwiper", {
  slidesPerView: 'auto',
  loop: true,
  loopedSlides: 9,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  speed: 1500,
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  }
});
var swiper = new Swiper(".reviewSwiper", {
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".review-pagination"
  },
  mousewheel: true,
  keyboard: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true // transformEl: ".swiper-slide"

  }
});
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  speed: 1500
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  language: 'zh-TW',
  autohide: true
});
$(document).ready(function () {
  $('.btn-danger').click(function (e) {
    e.preventDefault();
    alert("value:" + $('.lesson-select').val());
  }); // var lessons = $('.lesson-select').val()
  // $('.signUp-price').text( lessons );
  // $('.lesson-select').keyup(function (e) { 
  //   var lessons = $(this).val();
  //   $('.signUp-price').html(lessons);
  // }).keyup();

  var price = {
    "0": '',
    "1": 'NT$1600',
    "2": 'NT$1400',
    "3": 'NT$1000',
    "4": 'NT$900'
  };
  $("select").change(function () {
    var lessons = $('.lesson-select').val();
    $('.signUp-price').text(price[lessons]);
  }).change();
});
//# sourceMappingURL=all.js.map
