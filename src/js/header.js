function toggleMenuIcon() {
  const menuIconUse = document.getElementById('menu-icon-use');
  const currentIcon = menuIconUse.getAttribute('href');

  if (currentIcon === './images/icons.svg#icon-align-left') {
    menuIconUse.setAttribute('href', './images/icons.svg#icon-x-close');
  } else {
    menuIconUse.setAttribute('href', './images/icons.svg#icon-align-left');
  }
}
