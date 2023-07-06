// import { blockScroll } from './modal';

// const sing_up_btn = document.querySelector('.btn_sign_up');
// const sing_in_btn = document.querySelector('.btn_sign_in');
// const user_log_in_btn = document.querySelector('.register-btn');
// const login_btn_close = document.querySelector('modal-svg');

// let modal_action = document.querySelector('.login_action');
// let modalLoginBody = document.querySelector('body');

// sing_up_btn.addEventListener('click', preventDefault);
// sing_in_btn.addEventListener('click', preventDefault);
// user_log_in_btn.addEventListener('click', createLoginModalMarkup);
// console.log(user_log_in_btn);

// function preventDefault(e) {
//   e.preventDefault();
// }

// modalLoginBody.style.paddingRight = '0';

// function createLoginModalMarkup(e) {
//   modalLoginBody.style.paddingRight = '18px';
//   blockScroll();
//   modalLoginBody.classList.add('login_overlay');
//   modal_action.style.visibility = 'visible';
//   modal_action.style.opacity = '1';
//   eventLoginListeners();
// }

// function eventLoginListeners() {
//   const buttonClose = document.querySelector('.modal_login_btn_close');
//   buttonClose.addEventListener('click', closeLoginModal);
//   window.addEventListener('keydown', onEscCloseModal);
//   modalLoginBody.addEventListener('click', onOverlayCloseModal);
//   modalLoginBody.addEventListener('scroll', e => {
//     e.preventDefault();
//   });
// }

// function onOverlayCloseModal(e) {
//   if (e.target !== modal_action) {
//     return;
//   }
//   closeLoginModal();
// }

// function onEscCloseModal(e) {
//   if (e.code !== 'Escape') {
//     return;
//   }
//   closeLoginModal();
// }

// function closeLoginModal() {
//   modalLoginBody.classList.remove('no_scroll');
//   modalLoginBody.style.paddingRight = '0';
//   modalLoginBody.classList.remove('login_overlay');
//   modal_action.style.visibility = 'hidden';
//   modal_action.style.opacity = '0';
//   modalLoginBody.removeEventListener('click', onOverlayCloseModal);
//   window.removeEventListener('keydown', onEscCloseModal);
// }

import { blockScroll } from './modal';

const sing_up_btn = document.querySelector('.btn_sign_up');
const sing_in_btn = document.querySelector('.btn_sign_in');
const user_log_in_btn = document.querySelector('.register-btn');
const login_btn_close = document.querySelector('modal-svg');
const modalLoginAction = document.querySelector('.overlay_log');

let modal_action = document.querySelector('.login_action');
let modalLoginBody = document.querySelector('body');

sing_up_btn.addEventListener('click', preventDefault);
sing_in_btn.addEventListener('click', preventDefault);
user_log_in_btn.addEventListener('click', createLoginModalMarkup);

function preventDefault(e) {
  e.preventDefault();
}

modalLoginBody.style.paddingRight = '0';

function createLoginModalMarkup(e) {
  modalLoginBody.style.paddingRight = '18px';
  blockScroll();
  modalLoginBody.classList.add('login_overlay');
  modalLoginAction.style.visibility = 'visible';
  modalLoginAction.style.opacity = '1';
  eventLoginListeners();
}

function eventLoginListeners() {
  const buttonClose = document.querySelector('.modal_login_btn_close');
  buttonClose.addEventListener('click', closeLoginModal);
  window.addEventListener('keydown', onEscCloseModal);
  modalLoginBody.addEventListener('click', onOverlayCloseModal);
  modalLoginBody.addEventListener('scroll', e => {
    e.preventDefault();
  });
}

function onOverlayCloseModal(e) {
  if (e.target !== modalLoginAction) {
    return;
  }
  closeLoginModal();
}

function onEscCloseModal(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeLoginModal();
}

function closeLoginModal() {
  modalLoginBody.classList.remove('no_scroll');
  modalLoginBody.style.paddingRight = '0';
  modalLoginBody.classList.remove('login_overlay');
  modalLoginAction.style.visibility = 'hidden';
  modalLoginAction.style.opacity = '0';
  modalLoginBody.removeEventListener('click', onOverlayCloseModal);
  window.removeEventListener('keydown', onEscCloseModal);
}
