const selectedBookList = document.querySelector('.shopping-list');
const removeBookBtn = document.querySelector('.remove-book');
const selectedBooks = JSON.parse(localStorage.getItem('selected')) ?? [];


createMarkup(selectedBooks, selectedBookList);

removeBookBtn.addEventListener('click', removeBook)

function createMarkup(arr, list) {
    let markup;
    if (arr.length) {
      markup = arr
        .map(
          ({ author, list_name, title, book_image,description }) => ` <li class="book-card" >
          <div class="book-image-wrapper"><img src="${book_image}" alt="${title}" class="book-image"></div>
          <div class="book-info">
              <h2 class="book-title">${title}</h2>
              <p class="book-category">${list_name}</p>
              <p class="book-descr">${description}</p>
              <div class="card-inner-wrapper">
                  <h3 class="book-author">${author}</h3>
                  <div class="buy-links-wrapper">
                  <svg class="buy-link">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    <svg class="buy-link">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    <svg class="buy-link">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
                  </div>
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
      <img src="./images/shopping-list/list-placeholder.png" alt="No books added" class="empty-list-image">
    </li>`;
    }
    selectedBookList.innerHTML = markup;
  }

  function removeBook(evt){
evt.preventDefault();

  }
  