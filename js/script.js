const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuTiny = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
   menuList.classList.toggle('menu__list--open');
   menuTiny.classList.toggle('menu--open');//тень для заднего фона при мобильном меню

})
menuClose.addEventListener('click', () => {
   menuList.classList.remove('menu__list--open');
   menuTiny.classList.remove('menu--open');

})