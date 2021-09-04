const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.toggle');
const items = document.querySelector('.nav-items');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('logo-block__button-menu--open');
items.classList.remove('nav-items--none');
navToggle.classList.remove('logo-block__none');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--open');
  navToggle.classList.toggle('logo-block__button-menu--closed');
  navToggle.classList.toggle('logo-block__button-menu--open');
});
