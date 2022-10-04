const toggleMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.main-nav');
const mediaSize = window.matchMedia('(max-width:767px)');

mobileMenu.classList.add('main-nav--close');
toggleMenu.classList.remove('menu-toggle--nojs')

function openMobMenu() {
  if(mobileMenu.classList.toggle('main-nav--close')) {
    toggleMenu.classList.remove('open')
    mobileMenu.classList.remove('main-nav--open')
  }else {
    toggleMenu.classList.add('open')
    mobileMenu.classList.add('main-nav--open')
  }
}

function mediaQuery() {
  if(mediaSize){
    mobileMenu.classList.remove('main-nav--open')
    mobileMenu.classList.add('main-nav--close')
  }
}

mediaQuery()

toggleMenu.addEventListener('click', openMobMenu);

