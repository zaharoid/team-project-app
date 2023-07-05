// import Notiflix from 'notiflix';
// import { fetchBookID } from '../books-api';

// let modalBody = document.querySelector('main');
// let modalOpenWindow = document.querySelector('.modal_window');
// let modalMain = document.querySelector('.modal-main');
// const bookCover = document.querySelector('.modal-cover');
// const modalTitle = document.querySelector('.modal-title');
// const modalAuthor = document.querySelector('.modal-author');
// const modalDescription = document.querySelector('.modal-description');
// const amazon = document.querySelector('.amazon');
// const apple = document.querySelector('.apple');
// const bookShop = document.querySelector('.bookshop');

// const addBookBtn = document.querySelector('[data-action="add"]');
// const booksInList = document.querySelector('.books-in-categories-list');

// modalBody.style.paddingRight = '0px';

// modalBody.addEventListener('click', currentBook);

// function currentBook() {
//   const bookCards = document.querySelectorAll('[data-id]');
//   bookCards.forEach(card => {
//     card.addEventListener('click', e => {
//       const bookId = card.dataset.id;
//       modalBody.removeEventListener('click', currentBook);
//       fetchBookID(bookId)
//         .then(data => {
//           createMarkup(data);
//           toggleTextContentButton(data);

//           blockScroll();
//           eventListeners();
//         })
//         .catch(error => {
//           console.log('Error:', error);
//         });
//     });
//   });
// }

// addBookBtn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   const bookFromModal = getDataFromModal();

//   const books = JSON.parse(localStorage.getItem('booksToBuy'));

//   for (const book of books) {
//     if (bookFromModal.id === book.id) {
//       const bookId = books.indexOf(book);
//       books.splice(bookId, 1);
//       localStorage.setItem('booksToBuy', JSON.stringify(books));
//       closeModal();
//       Notiflix.Notify.success('Book successfully deleted!');

//       return;
//     }
//   }

//   books.push(bookFromModal);
//   localStorage.setItem('booksToBuy', JSON.stringify(books));

//   closeModal();

//   Notiflix.Notify.success('Book successfully added!');

//   const booksToBuy = JSON.parse(localStorage.getItem('booksToBuy'));
// }

// function toggleTextContentButton(book) {
//   const booksFromLS = JSON.parse(localStorage.getItem('booksToBuy'));

//   for (const card of booksFromLS) {
//     if (book._id === card.id) {
//       addBookBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
//       return;
//     }
//   }
//   addBookBtn.textContent = 'ADD TO SHOPPING LIST';
// }

// function getDataFromModal() {
//   return {
//     id: modalTitle.getAttribute('data-id'),
//     title: modalTitle.textContent,
//     image: bookCover.src,
//     author: modalAuthor.textContent,
//     description: modalDescription.textContent,
//     category: modalTitle.dataset.category,
//     links: [amazon.href, bookShop.href, apple.href],
//   };
// }

// function createMarkup(data) {
//   modalOpenWindow.classList.add('overlay');
//   modalBody.style.paddingRight = '18px';
//   modalMain.style.visibility = 'visible';
//   modalMain.style.opacity = '1';
//   bookCover.src = data.book_image;
//   bookCover.alt = data.title;
//   modalTitle.textContent = data.title;
//   modalTitle.dataset.category = data.list_name;
//   modalAuthor.textContent = data.author;
//   modalDescription.textContent = data.description;

//   modalTitle.setAttribute('data-id', `${data._id}`);
//   topBookShopLink(data);
// }

// function topBookShopLink({ buy_links }) {
//   return buy_links.map(arr => {
//     if (arr.name === 'Amazon') {
//       amazon.href = arr.url;
//     }
//     if (arr.name === 'Bookshop') {
//       bookShop.href = arr.url;
//     }
//     if (arr.name === 'Apple Books') {
//       apple.href = arr.url;
//     }
//   });
// }

// function eventListeners() {
//   const buttonClose = document.querySelector('.modal_btn_close');
//   buttonClose.addEventListener('click', closeModal);
//   modalBody.addEventListener('click', onOverlayCloseModal);
//   modalBody.addEventListener('keydown', onEscCloseModal);
//   modalBody.addEventListener('scroll', e => {
//     e.preventDefault();
//   });
// }

// function blockScroll() {
//   modalBody.classList.add('no_scroll');
// }

// function closeModal() {
//   modalBody.classList.remove('no_scroll');
//   modalBody.style.paddingRight = '0px';
//   modalOpenWindow.classList.remove('overlay');
//   modalMain.style.visibility = 'hidden';
//   modalMain.style.opacity = '0';
//   modalBody.removeEventListener('click', onOverlayCloseModal);
//   modalBody.removeEventListener('keydown', onEscCloseModal);
//   modalBody.removeEventListener('click', currentBook);
//   modalBody.addEventListener('click', currentBook);
// }

// function onOverlayCloseModal(e) {
//   if (e.target !== modalOpenWindow) {
//     return;
//   }
//   closeModal();
// }

// function onEscCloseModal(e) {
//   if (e.code !== 'Escape') {
//     return;
//   }
//   closeModal();
// }

import Notiflix from 'notiflix';
import { fetchBookID } from '../books-api';

const refs = {
  bookCover: document.querySelector('.modal-cover'),
  modalTitle: document.querySelector('.modal-title'),
  modalAuthor: document.querySelector('.modal-author'),
  modalDescription: document.querySelector('.modal-description'),
  amazon: document.querySelector('.amazon'),
  apple: document.querySelector('.apple'),
  bookShop: document.querySelector('.bookshop'),
  addBookBtn: document.querySelector('[data-action="add"]'),
};

let modalBody = document.querySelector('main');
let modalOpenWindow = document.querySelector('.modal_window');
let modalMain = document.querySelector('.modal-main');

modalBody.style.paddingRight = '0px';

modalBody.addEventListener('click', currentBook);

function currentBook() {
  const bookCards = document.querySelectorAll('[data-id]');
  bookCards.forEach(card => {
    card.addEventListener('click', e => {
      const bookId = card.dataset.id;
      modalBody.removeEventListener('click', currentBook);
      fetchBookID(bookId)
        .then(data => {
          createMarkup(data);
          toggleTextContentButton(data);

          blockScroll();
          eventListeners();
        })
        .catch(error => {
          console.log('Error:', error);
        });
    });
  });
}

refs.addBookBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const bookFromModal = getDataFromModal();

  const books = JSON.parse(localStorage.getItem('booksToBuy'));

  for (const book of books) {
    if (bookFromModal.id === book.id) {
      const bookId = books.indexOf(book);
      books.splice(bookId, 1);
      localStorage.setItem('booksToBuy', JSON.stringify(books));
      closeModal();
      Notiflix.Notify.success('Book successfully deleted!');

      return;
    }
  }

  books.push(bookFromModal);
  localStorage.setItem('booksToBuy', JSON.stringify(books));

  closeModal();

  Notiflix.Notify.success('Book successfully added!');

  const booksToBuy = JSON.parse(localStorage.getItem('booksToBuy'));
}

function toggleTextContentButton(book) {
  const booksFromLS = JSON.parse(localStorage.getItem('booksToBuy'));

  for (const card of booksFromLS) {
    if (book._id === card.id) {
      refs.addBookBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
      return;
    }
  }
  refs.addBookBtn.textContent = 'ADD TO SHOPPING LIST';
}

function getDataFromModal() {
  return {
    id: refs.modalTitle.getAttribute('data-id'),
    title: refs.modalTitle.textContent,
    image: refs.bookCover.src,
    author: refs.modalAuthor.textContent,
    description: refs.modalDescription.textContent,
    category: refs.modalTitle.dataset.category,
    links: [refs.amazon.href, refs.bookShop.href, refs.apple.href],
  };
}

function createMarkup(data) {
  modalOpenWindow.classList.add('overlay');
  modalBody.style.paddingRight = '18px';
  modalMain.style.visibility = 'visible';
  modalMain.style.opacity = '1';
  refs.bookCover.src = data.book_image;
  refs.bookCover.alt = data.title;
  refs.modalTitle.textContent = data.title;
  refs.modalTitle.dataset.category = data.list_name;
  refs.modalAuthor.textContent = data.author;
  refs.modalDescription.textContent = data.description;

  refs.modalTitle.setAttribute('data-id', `${data._id}`);
  topBookShopLink(data);
}

function topBookShopLink({ buy_links }) {
  return buy_links.map(arr => {
    if (arr.name === 'Amazon') {
      refs.amazon.href = arr.url;
    }
    if (arr.name === 'Bookshop') {
      refs.bookShop.href = arr.url;
    }
    if (arr.name === 'Apple Books') {
      refs.apple.href = arr.url;
    }
  });
}

function eventListeners() {
  const buttonClose = document.querySelector('.modal_btn_close');
  buttonClose.addEventListener('click', closeModal);
  modalBody.addEventListener('click', onOverlayCloseModal);
  modalBody.addEventListener('keydown', onEscCloseModal);
  modalBody.addEventListener('scroll', e => {
    e.preventDefault();
  });
}

function blockScroll() {
  modalBody.classList.add('no_scroll');
}

function closeModal() {
  modalBody.classList.remove('no_scroll');
  modalBody.style.paddingRight = '0px';
  modalOpenWindow.classList.remove('overlay');
  modalMain.style.visibility = 'hidden';
  modalMain.style.opacity = '0';
  modalBody.removeEventListener('click', onOverlayCloseModal);
  modalBody.removeEventListener('keydown', onEscCloseModal);
  modalBody.removeEventListener('click', currentBook);
  modalBody.addEventListener('click', currentBook);
}

function onOverlayCloseModal(e) {
  if (e.target !== modalOpenWindow) {
    return;
  }
  closeModal();
}

function onEscCloseModal(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}
