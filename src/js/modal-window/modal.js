import { fetchBookID } from '../books-api'
import { createMarkup } from "./modal-markup";

const modalBody = document.querySelector("body")

modalBody.addEventListener('click', (currentBook))

fetchBookID("643282b1e85766588626a0c2").then(data => {
    console.log('data', data)
    createMarkup(data)
    modalBody.insertAdjacentHTML('beforeend', createMarkup(data))
})

function currentBook(e) {
        // e.preventDefault();
    
    // if (e.target.parentElement !== 'li.book-card') {
    //     return
    // }
    console.log(e)
}