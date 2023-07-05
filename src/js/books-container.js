import { fetchTopBooks } from './books-api';
const refs = {
  categoriesList: document.querySelector('.books-in-categories-list'),
  booklistTitle: document.querySelector('.booklist-title'),
};

localStorage.setItem('booksToBuy', JSON.stringify([]));

fetchTopBooks().then(renderAllCards);
export async function renderAllCards(data) {
  let booksArr = [];
  refs.booklistTitle.innerHTML = lastWordChange('Best Sellers Books');
  data.forEach(category => {
    let markup_base = `<li class="category-item">
    <h3 class="book-category-title">${category.books[0].list_name}</h3>
    <ul class="bookslist">`;
    let markup = ``;

    category.books.map(book => {
      booksArr.push(book);
      markup =
        markup +
        `
      <li class="book-card book-card-main" data-id="${book._id}">
        <div class="thumb book-cover-container">
          <img class="book-cover" src="${book.book_image}" alt="${book.title}" loading="lazy" />
          <div class="overlay-book">
            <p class="hidden-card">quick view</p>
          </div>
        </div>
        <h4 class="book-title">${book.title}</h4>
        <p class=book-author-name>${book.author}</p>
      </li>`;
    });
    markup_base =
      markup_base +
      markup +
      `</ul>
        <div class="see-more-btn-container" >
        <button class="see-more-btn" data-category-name="${category.books[0].list_name}">See more</button>
        </div>
      </li>`;
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

export function lastWordChange(string) {
  let markup = `${string.slice(0, string.lastIndexOf(' '))}
    <span class="category-last-word">${string.slice(
      string.lastIndexOf(' '),
      string.length
    )}</span>`;
  return markup;
}
