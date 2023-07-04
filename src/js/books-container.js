import { fetchTopBooks } from './books-api';
const refs = {
  categoriesList: document.querySelector('.books-in-categories-list'),
};
fetchTopBooks().then(renderAllCards);
async function renderAllCards(data) {
  let booksArr = [];

  data.forEach(category => {
    let markup_base = `<li class="category-item">
    <h3 class="description-book-cont-color">${category.books[0].list_name}</h3>
    <ul class="bookslist">`;
    let markup = ``;

    category.books.map(book => {
      booksArr.push(book);
      markup =
        markup +
        `
      <li class="book-card" data-id="${book._id}">
        <div class="thumb">
          <img class="book-cover" src="${book.book_image}" alt="${book.title}" loading="lazy" />
        </div>
        <h4 class="book-title">${book.title}</h4>
        <p class="author-text-color">${book.author}</p>
      </li>`;
    });
    markup_base =
      markup_base +
      markup +
      `</ul><div class="button-container" ><button class="books-by-category" data-category-name="${category.books[0].list_name}">See more</button></div></li>`;
    refs.categoriesList.insertAdjacentHTML('beforeend', markup_base);
  });

  localStorage.setItem('books', JSON.stringify(booksArr));
}

refs.categoriesList.addEventListener('click', onMoreBtnClick);

function onMoreBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  //console.log(e.target.getAttribute('data-category-name'))
}
