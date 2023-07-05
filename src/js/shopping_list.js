import './home__support';
import './dark-theme';
import './modal-window/modal';
import './header';
import './auth';

import noBooksImage from "../images/shopping-list/list-placeholder.webp";
import bookImagePlaceholder from "../images/shopping-list/book-image-placeholder.webp";
import svgIcons from "../images/icons.svg";

const refs={
  selectedBookList:document.querySelector('.shopping-list'),
  removeBookBtn:document.querySelector('.remove-book'),
  selectedBooks:JSON.parse(localStorage.getItem('selected')) ?? [],
}

// const selectedBookList = document.querySelector('.shopping-list');
// const removeBookBtn = document.querySelector('.remove-book');
// const selectedBooks = JSON.parse(localStorage.getItem('selected')) ?? [];
createMarkup(refs.selectedBooks, refs.selectedBookList);

if(refs.selectedBooks.length>0){
  removeBookBtn.addEventListener('click', removeBook);
}

function createMarkup(arr, selectedBookList) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          _id,
          author,
          list_name,
          title,
          book_image,
          description,
          buy_links,
        }) => ` <li class="book-card data-id="${_id}" >
          <div class="book-image-wrapper"><img src="${book_image}" alt="${title}" class="book-image" onerror="this.src=${bookImagePlaceholder};"></div>
          <div class="book-info">
              <h2 class="book-title">${title}</h2>
              <p class="book-category">${list_name}</p>
              <p class="book-descr">${description}</p>
              <div class="card-inner-wrapper">
                  <h3 class="book-author">${author}</h3>
                  <ul class="buy-links-list">${createBuyLinks(buy_links)}</ul>  
              </div>
              <button type="button" class="remove-book">
              <svg class="remove-image">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
              </button>
          </div>
          
          
      </li>`
      )
      .join('');
  } else {
    markup = `<li class="empty-list-card">
      <p class="empty-list-text">This page is empty, add some books and proceed to order.</p>
      <img src=${noBooksImage} alt="No books added" class="empty-list-image">
    </li>`;
  }
  selectedBookList.innerHTML = markup;
}

function removeBook(evt) {
  evt.preventDefault();
}

function createBuyLinks(arr) {
  return arr
    .map(data => {
      if (data.name === 'Amazon') {
        return `<li class="buy-link-item">
      <a href=${data.url} target="_blank">
      <svg class="buy-link amazon">
      <use href=/src/images/icons.svg#icon-amazon></use>
      </svg></a>
      </li>
      `;
      }
      if (data.name === 'Apple Books') {
        return `<li class="buy-link-item">
      <a href="${data.url}" target="_blank">
      <svg class="buy-link apple">
      <use href="${svgIcons}#icon-apple"></use>
      </svg></a>
      </li>`;
      }
      if (data.name === 'Bookshop') {
        return `<li class="buy-link-item">
    <a href="${data.url}" target="_blank">
    <svg class="buy-link bookshop">
    <use href="/src/images/icons.svg#bookshop"></use>
    </svg></a>
    </li>
    `;
      }
    })
    .join('');
}

function findBook(elem) {
  const bookId = elem.closest('.book-card').dataset.id;
  return refs.selectedBooks.find(({ id }) => id === bookId);
}