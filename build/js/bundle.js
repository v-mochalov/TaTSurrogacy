(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // Don't touch
  svg4everybody(); // End don't touch

  require('./main.js');
}); // remove preloader

$(window).on('load', function () {
  $('html').addClass('page-loaded');
});

},{"./main.js":2}],2:[function(require,module,exports){
"use strict";

// Anchor Slide
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); //Header BURGER

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
}); //Acordeon

$(document).ready(function () {
  $('.block__title').click(function (event) {
    if ($('.block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
}); //Adaptive SlickSlider REVIEW

$(window).on('resize', function (e) {
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".review__slider").data('init-slider'); // Если мобильный

  if (window.innerWidth < 775) {
    // Если слайдер не запущен
    if (init != 1) {
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        adaptiveHeight: true
      }).data({
        'init-slider': 1
      });
    }
  } // Если десктоп
  else {
      // Если слайдер запущен
      if (init == 1) {
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.review__slider').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
}).trigger('resize'); //Adaptive SlickSlider ALLIES

$(window).on('resize', function (e) {
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".question__allies").data('init-slider'); // Если мобильный

  if (window.innerWidth < 775) {
    // Если слайдер не запущен
    if (init != 1) {
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.question__allies').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        fade: true
      }).data({
        'init-slider': 1
      });
    }
  } // Если десктоп
  else {
      // Если слайдер запущен
      if (init == 1) {
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.question__allies').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
}).trigger('resize'); //TABS SURMAMAM
// tabbed content

$(".tab_content").hide();
$(".tab_content:first").show();
/* if in tab mode */

$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
  /*$(".tabs").css("margin-top", function(){ 
  	return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
  });*/
});
$(".tab_container").css("min-height", function () {
  return $(".tabs").outerHeight() + 50;
});
/* if in drawer mode */

$(".tab_drawer_heading").click(function () {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();
  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
}); //TABS DONORAM
// tabbed content

$(".tab_contents").hide();
$(".tab_contents:first").show();
/* if in tab mode */

$("ul.tabss li").click(function () {
  $(".tab_contents").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabss li").removeClass("active");
  $(this).addClass("active");
  $(".tab_drawer_headings").removeClass("d_active");
  $(".tab_drawer_headings[rel^='" + activeTab + "']").addClass("d_active");
  /*$(".tabs").css("margin-top", function(){ 
  	return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
  });*/
});
$(".tab_containers").css("min-height", function () {
  return $(".tabss").outerHeight() + 50;
});
/* if in drawer mode */

$(".tab_drawer_headings").click(function () {
  $(".tab_contents").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();
  $(".tab_drawer_headings").removeClass("d_active");
  $(this).addClass("d_active");
  $("ul.tabss li").removeClass("active");
  $("ul.tabss li[rel^='" + d_activeTab + "']").addClass("active");
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
