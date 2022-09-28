const toggleMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.classList.remove('mobile-menu--nojs');

function openMobMenu() {
  if(mobileMenu.classList.toggle('mobile-menu--close')) {
    mobileMenu.classList.remove('mobile-menu--open')
  }else {
    mobileMenu.classList.add('mobile-menu--open')
  }
}

toggleMenu.addEventListener('click', openMobMenu);


