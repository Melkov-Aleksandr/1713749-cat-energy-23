var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle');
var button = document.querySelector('.logo-block__button-menu');

  navToggle.addEventListener('click', function() {
    navMain.classList.remove('main-nav--nojs');
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--open');
    }
  });

  button.addEventListener('click', function() {
    if (button.classList.contains('logo-block__button-menu--closed')) {
      button.classList.remove('logo-block__button-menu--closed');
      button.classList.add('logo-block__button-menu--open');
    } else {
      button.classList.add('logo-block__button-menu--closed');
      button.classList.remove('logo-block__button-menu--open');
    }
  });
