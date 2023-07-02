import { fetchBookCategories} from './books-api';
const refs = {
  divEl: document.querySelector('.category-list'),
  allcategory: document.querySelector('.all-category'),
  onecategoryEl: document.querySelector('.category-link')
};

fetchBookCategories().then(data => {
  data.map(book => {
    const markup = `<li class="list category-item">
        <a class="link category-link" href="#">${book.list_name}</a>
      </li>`;
    refs.divEl.insertAdjacentHTML('beforeend', markup);
  });
});

// refs.allcategory.focus()
refs.divEl.addEventListener('click', onCategoryClick);

function onCategoryClick(e) {
  if (!e.target.classList.contains('category-link')) {
    return;
  }
  e.preventDefault();
  // console.log(e.target.textContent)
}

