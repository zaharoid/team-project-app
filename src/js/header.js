const menuOpen = document.querySelector('.icon-menu-open');
const iconBurger = document.querySelector('.header-icon-open');
const iconClose = document.querySelector('.header-icon-close');
menuOpen.addEventListener('click', onClick);
function onClick(e) {
  iconBurger.classList.toggle('icon-display-none');
  iconClose.classList.toggle('icon-display-none');
}
