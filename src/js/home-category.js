import { lastWordChange } from './books-container';
import { renderAllCards } from './books-container';
import {
  fetchTopBooks,
  fetchBookCategories,
  fetchBookByCategory,
} from './books-api';
const refs = {
  loaderEl: document.querySelector('.loader'),
  divEl: document.querySelector('.category-list'),
  allcategory: document.querySelector('.all-category'),
  onecategoryEl: document.querySelector('.category-link'),
  categoriesList: document.querySelector('.books-in-categories-list'),
  loader: document.querySelector('#loader-booklist'),
};

refs.divEl.classList.add('is-hidden');
refs.categoriesList.classList.add('is-hidden');

fetchBookCategories().then(data => {
  const firstCategoryMarkup = `<li class="list category-li">
            <a class="link category-link is-active" href="#" id="all">All categories</a>
        </li>`;
  refs.divEl.insertAdjacentHTML('beforeend', firstCategoryMarkup);
  data.map(book => {
    const markup = `<li class="list category-li">
        <a class="link category-link" href="#">${book.list_name}</a>
      </li>`;
    refs.divEl.insertAdjacentHTML('beforeend', markup);

    refs.divEl.classList.remove('is-hidden');
    refs.loaderEl.classList.add('is-hidden');
  });
});
// refs.allcategory.focus()
refs.divEl.addEventListener('click', onCategoryClick);
function onCategoryClick(e) {
  if (!e.target.classList.contains('category-link')) {
    return;
  }
  e.preventDefault();
  let activeBook = document.querySelector('.is-active');
  if (activeBook) {
    activeBook.classList.remove('is-active');
  }
  e.target.classList.add('is-active');
  let titleCategory = document.querySelector('.booklist-title');

  toggleBooksLoader();

  if (e.target.id === '') {
    let titleTextContent = e.target.textContent;
    titleCategory.innerHTML = lastWordChange(titleTextContent);
    refs.categoriesList.classList.add('render-category');
    fetchBookByCategory(e.target.textContent).then(data =>
      renderMarkupBooksByCategory(takeBookMarkupByCategory(data))
    );

  } else {
    refs.categoriesList.innerHTML = '';
    titleCategory.innerHTML = lastWordChange('Best Sellers Books');
    refs.categoriesList.classList.add('render-category');
    fetchTopBooks().then(renderAllCards);
  }
}
function takeBookMarkupByCategory(books) {
  toggleBooksLoader();
  let markup = books
    .map(({ author, title, book_image, _id }) => {
      return `
      <li class="book-card render-item-card" data-id="${_id}">
        <div class="thumb book-cover-container">
          <img class="book-cover" src="${book_image}" alt="${title}" loading="lazy" />
         <div class="overlay-book"><p class="hidden-card">quick view</p>
       </div>
        </div>
        <h4 class="book-title">${title}</h4>
        <p class="book-author-name">${author}</p>
      </li>`;
    })
    .join('');
  return markup;
}
function renderMarkupBooksByCategory(markup) {
  refs.categoriesList.innerHTML = markup;
}

refs.categoriesList.addEventListener('click', onMoreBtnClick);

function onMoreBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  toggleBooksLoader();
  window.scrollBy(0, 0);
  let activeBook = document.querySelector('.is-active');
  activeBook.classList.remove('is-active');

  const links = document.querySelectorAll('.category-link');
  links.forEach(link => {
    if (link.textContent === e.target.getAttribute('data-category-name')) {
      link.classList.add('is-active');
      link.scrollIntoView();
    }
  });
  let titleCategory = document.querySelector('.booklist-title');
  titleCategory.innerHTML = lastWordChange(
    e.target.getAttribute('data-category-name')
  );
  refs.categoriesList.classList.add('render-category');
  fetchBookByCategory(e.target.getAttribute('data-category-name')).then(data =>
    renderMarkupBooksByCategory(takeBookMarkupByCategory(data))
  );
}

function toggleBooksLoader() {
  refs.categoriesList.classList.toggle('is-hidden');
  refs.loader.classList.toggle('is-hidden');
}