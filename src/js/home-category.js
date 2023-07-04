import { fetchBookCategories, fetchBookByCategory, fetchTopBooks , renderAllCards  } from './books-api';
const refs = {
  divEl: document.querySelector('.category-list'),
  allcategory: document.querySelector('.all-category'),
  onecategoryEl: document.querySelector('.category-link'),
  categoriesList: document.querySelector('.books-in-categories-list'),
};

fetchBookCategories().then(data => {
  data.map(book => {
    const markup = `<li class="list category-item">
        <a class="category-link" href="#">${book.list_name}</a>
      </li>`;
    refs.divEl.insertAdjacentHTML('beforeend', markup);
  });
});
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
  let titleTextContent = e.target.textContent;
  titleCategory.textContent = titleTextContent;

  refs.categoriesList.classList.add('render-category');

  fetchBookByCategory(e.target.textContent).then(data => renderMarkupBooksByCategory(takeBookMarkupByCategory(data)))

}


function takeBookMarkupByCategory(books) { 
  let markup = books.map(({ author, title, book_image, _id }) => {
  
    return `
      <li class="book-card render-item-card" data-id="${_id}">
        <div class="thumb">
          <img class="book-cover" src="${book_image}" alt="${title}" loading="lazy" />
        </div>
        <h4 class="render-title">${title}</h4>
        <p class="render-author">${author}</p>
      </li>`;
    
  }).join('');
  return markup;
};

function renderMarkupBooksByCategory(markup) { 
  refs.categoriesList.innerHTML = markup;
};