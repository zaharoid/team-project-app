import { fetchTopBooks } from './books-api'
const refs = {
  categorieslist: document.querySelector('.categories-list'),
}
fetchTopBooks().then(console.log);
fetchTopBooks().then(renderAllCards);

async function renderAllCards(data) {
  data.forEach(category => {
    let markup_base = `<li class="category">
    <h3>${category.books[0].list_name}</h3>
    <ul class="bookslist">`
    let markup = ``;
    category.books.map(book => {
    markup = markup + `
      <li class="book-card">
        <div class="thumb">
          <img class="book-cover" src="${book.book_image}" alt="${book.title}" loading="lazy" />
        </div>
        <h4 class="book-title">${book.title}</h4>
        <p>${book.author}</p>
      </li>`;
    
    });
    markup_base = markup_base + markup + `</ul><div class="button-container"><button>See more</button></div></li>`;
    refs.categorieslist.insertAdjacentHTML('beforeend', markup_base);
  });
}
