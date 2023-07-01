import { fetchBookCategories } from './books-api';
const divEl = document.querySelector('.category-list')

fetchBookCategories().then(data => {
  data.map(book => {
        const markup = `<li class="list category-item">
        <a class="link category-link" href="#">${book.list_name}</a>
      </li>`
      divEl.insertAdjacentHTML("beforeend", markup);
    })
})