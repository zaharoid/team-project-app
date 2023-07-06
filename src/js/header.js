import { setUncaughtExceptionCaptureCallback } from 'process';

const menuOpen = document.querySelector('.icon-menu-open');
const iconBurger = document.querySelector('.header-icon-open');
const iconClose = document.querySelector('.header-icon-close');
const burger = document.querySelector('.header-icon-open');
const burgerModal = document.querySelector('.burger-modal');
const closeIcon = document.querySelector('.header-icon-close');
menuOpen.addEventListener('click', onClick);
function onClick(e) {
  iconBurger.classList.toggle('icon-display-none');
  iconClose.classList.toggle('icon-display-none');
}
burger.addEventListener('click', onBurgerClick);
closeIcon.addEventListener('click', onCloseModal);

function onBurgerClick() {
  burgerModal.classList.remove('burger-hidden');
}

function onCloseModal() {
  burgerModal.classList.add('burger-hidden');
}
