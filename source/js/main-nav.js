var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--open');
    }
  });