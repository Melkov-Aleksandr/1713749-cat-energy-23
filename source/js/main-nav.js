const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.toggle');
const items = document.querySelector('.nav-items');
const map = document.querySelector('.page-footer__map-nojs');
const mapContainer = document.querySelector('.page-footer__map-iframe');
const logo = document.querySelector('.logo-block__logo-text');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('logo-block__button-menu--open');
items.classList.remove('nav-items--none');
navToggle.classList.remove('logo-block__none');
map.classList.remove('page-footer__map-nojs');
mapContainer.classList.remove('page-footer__map-iframe--disabled');
logo.classList.remove('logo-block__logo-text--position')

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--open');
  navToggle.classList.toggle('logo-block__button-menu--closed');
  navToggle.classList.toggle('logo-block__button-menu--open');
});
