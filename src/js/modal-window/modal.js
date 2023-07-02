import { fetchBookID } from '../books-api'
import { createMarkup } from "./modal-markup";

let modalBody = document.querySelector("body")
let modalOpenWindow = document.querySelector(".modal_window")


modalBody.addEventListener('click', currentBook)

function eventListeners() {
    const buttonClose = document.querySelector(".modal_btn_close")
    buttonClose.addEventListener("click", closeModal)
    modalBody.addEventListener('click', onOverlayCloseModal)
    modalBody.addEventListener('keydown', onEscCloseModal)
    modalBody.addEventListener("scroll", (e) => { e.preventDefault() })
}

function currentBook() {    
    const book = document.querySelector('[data-id]');
    console.dir(book)
    const bookCards = document.querySelectorAll('[data-id]');
    console.log(bookCards)
    bookCards.forEach(card => {
        card.addEventListener('click', () => {
            const bookId = card.dataset.id;
            fetchBookID(bookId).then(data => {
                console.log('data', data)
                modalOpenWindow.innerHTML = createMarkup(data)
                modalOpenWindow.classList.add("overlay")
                blockScroll()
                eventListeners()
            }).catch((error) => {
      console.log('Error:', error);
    });
        });
    });
}

function blockScroll() {
    modalBody.classList.add("no_scroll")
}

function closeModal() {
    modalBody.classList.remove("no_scroll")
    modalOpenWindow.classList.remove("overlay")
    modalOpenWindow.innerHTML = ""
    modalBody.removeEventListener('click', onOverlayCloseModal)
    modalBody.removeEventListener('keydown', onEscCloseModal)
}

function onOverlayCloseModal(e) {
    if (e.target !== modalOpenWindow) {
        return
    }
    closeModal()
}

function onEscCloseModal(e) {
    if (e.code !== "Escape") {
        return
    }
    closeModal()
}

