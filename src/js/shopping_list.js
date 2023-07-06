import './home__support';
import './dark-theme';
// import './modal-window/modal';
import './header';
import './auth';

import noBooksImage from '../images/shopping-list/list-placeholder.webp';
import bookImagePlaceholder from '../images/shopping-list/book-image-placeholder.webp';
import svgIcons from '../images/icons.svg';
import bookShopIcon from '../images/bookshop.png';

const refs = {
  selectedBookList: document.querySelector('.shopping-list'),
  selectedBooks: JSON.parse(localStorage.getItem('booksToBuy')) ?? [],
};

createMarkup(refs.selectedBooks, refs.selectedBookList);

if (refs.selectedBooks.length > 0) {
  refs.selectedBookList.addEventListener('click', removeBook);
}

function createMarkup(arr) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          id,
          author,
          category,
          title,
          image,
          description,
          links,
        }) => ` <li class="book-card" data-id="${id}" >
          <div class="book-image-wrapper">
          <img src="${image}" alt="${title}" class="book-image" onerror="this.src=${bookImagePlaceholder}"></div>
          <div class="book-info">
              <h2 class="book-title">${title}</h2>
              <p class="book-category">${category}</p>
              <p class="book-descr">${description}</p>
              <div class="card-inner-wrapper">
                  <h3 class="book-author">${author}</h3>
                  <div class="buy-links-wrapper">
                  <ul class="buy-links-list">
                  <li class="buy-link-item">
                  <a href="${links[0]}" target="_blank">
                  <svg class="buy-link amazon">
                  <use href="${svgIcons}#icon-amazon"></use>
                  </svg></a>
                  </li>
                  <li class="buy-link-item">
                  <a href="${links[1]}" target="_blank">
                  <svg class="buy-link apple">
                  <use href="${svgIcons}#icon-apple"></use>
                  </svg></a>
                  </li>
                  <li class="buy-link-item">
                  <a href="${links[2]}" target="_blank">
                  <img src=${bookShopIcon} alt="No books added" class="buy-link bookshop"></a>
                  </li>
                  </ul> 
                  </div>
                  </div>
              <button type="button" class="remove-book">
              <svg class="remove-image">
      <use href="${svgIcons}#icon-trash" class="remove-icon"></use>
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
 return refs.selectedBookList.innerHTML = markup;
}

function removeBook(evt) {
  if(evt.target.classList[0] ==='remove-image'|| evt.target.classList[0] ==='remove-icon'|| evt.target.classList[0] ==='remove-book'){
    let bookIndex = findBook(evt.target);
    refs.selectedBooks.splice(bookIndex, 1);
    localStorage.setItem('booksToBuy', JSON.stringify(refs.selectedBooks));
    createMarkup(refs.selectedBooks, refs.selectedBookList); 
  }
  };
  

function findBook(elem) {
  let bookId = elem.closest('.book-card').dataset.id;
  return refs.selectedBooks.findIndex(book =>book.id === bookId);
}
