import {
    blockScroll
} from "./modal"


const user_log_in_btn = document.querySelector(".button-container") 
const login_btn_close = document.querySelector("modal-svg")

let modal_action = document.querySelector('.login_action');
let modalLoginBody = document.querySelector('body');


user_log_in_btn.addEventListener('click', createLoginModalMarkup)
console.log(user_log_in_btn)


function createLoginModalMarkup(e) {
    blockScroll();
    eventLoginListeners();
    modalLoginBody.classList.add('login_overlay');
    modalLoginBody.style.paddingRight = '18px';
    modal_action.style.visibility = 'visible';
    modal_action.style.opacity = '1';
}

function eventLoginListeners() {
  const buttonClose = document.querySelector('.modal_login_btn_close');
  buttonClose.addEventListener('click', closeLoginModal);
  modalLoginBody.addEventListener('click', onOverlayCloseModal);
  window.addEventListener('keydown', onEscCloseModal);
  modalLoginBody.addEventListener('scroll', e => {
    e.preventDefault();
  });
}

function closeLoginModal() {
  modalLoginBody.classList.remove('no_scroll');
  modalLoginBody.style.paddingRight = '0px';
  modalLoginBody.classList.remove('login_overlay');
  modal_action.style.visibility = 'hidden';
  modal_action.style.opacity = '0';
  modalLoginBody.removeEventListener('click', onOverlayCloseModal);
  window.removeEventListener('keydown', onEscCloseModal);
}
function onOverlayCloseModal(e) {
  if (e.target !== modal_action) {
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
