import { fetchBookID } from '../books-api'

let modalBody = document.querySelector("main")
let modalOpenWindow = document.querySelector(".modal_window")
let modalMain = document.querySelector(".modal-main")
const bookCover = document.querySelector(".modal-cover")
const modalTitle = document.querySelector(".modal-title")
const modalAuthor = document.querySelector(".modal-author")
const modalDescription = document.querySelector(".modal-description")
const amazon = document.querySelector(".amazon")
const apple = document.querySelector(".apple")
const bookShop = document.querySelector(".bookshop")
const addBookBtn = document.querySelector(".modal-add-btn")

modalBody.style.paddingRight = "0px"

modalBody.addEventListener('click', currentBook)

function currentBook() {  
    const bookCards = document.querySelectorAll('[data-id]');
    bookCards.forEach(card => {    
        card.addEventListener('click', () => {
            const bookId = card.dataset.id;
            modalBody.removeEventListener('click', currentBook)
            fetchBookID(bookId).then(data => {
                createMarkup(data)
                buttonID(data)
                blockScroll()
                eventListeners()
            }).catch((error) => {
                console.log('Error:', error);
            });
        });
    });
}

export function buttonID(data) {
    let buttonId = addBookBtn.setAttribute = data._id
}

function createMarkup(data) {
    modalOpenWindow.classList.add("overlay")
    modalBody.style.paddingRight = "18px"
                modalMain.style.visibility = "visible"
                modalMain.style.opacity = "1"
                bookCover.src = data.book_image
                bookCover.alt = data.title
                modalTitle.textContent = data.title
                modalAuthor.textContent = data.author
                modalDescription.textContent = data.description
    topBookShopLink(data)
                
}

function topBookShopLink({buy_links}) {
    return buy_links.map(arr => {
        if (arr.name === "Amazon") {amazon.href = arr.url}
        if (arr.name === "Bookshop") {bookShop.href =  arr.url}
        if (arr.name === "Apple Books") {apple.href =  arr.url}
    })
}

function eventListeners() {
    const buttonClose = document.querySelector(".modal_btn_close")
    buttonClose.addEventListener("click", closeModal)
    modalBody.addEventListener('click', onOverlayCloseModal)
    modalBody.addEventListener('keydown', onEscCloseModal)
    modalBody.addEventListener("scroll", (e) => { e.preventDefault() })
}

function blockScroll() {
    modalBody.classList.add("no_scroll")
}

function closeModal() {
    modalBody.classList.remove("no_scroll")
        modalBody.style.paddingRight = "0px"
    modalOpenWindow.classList.remove("overlay")
                    modalMain.style.visibility = "hidden"
                modalMain.style.opacity = "0"
    modalBody.removeEventListener('click', onOverlayCloseModal)
    modalBody.removeEventListener('keydown', onEscCloseModal)
    modalBody.addEventListener('click', currentBook)
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

