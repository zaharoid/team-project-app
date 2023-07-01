const icon = {
    closeBtn: 'href="../images/icons.svg#icon-logo"',
    amazon: 'href="../images/image.svg#pattern0"',
    Bookshop: '',
    "Apple Books": ''
}

export function createMarkup(data) {
    return `
    <div class="modal-main">
    <svg class="modal-svg" width="24px" height="24px">
    <use href=${icon.amazon}></use>
    </svg>
    <img class="modal-cover" src="${data.book_image
    }" alt="${data.title}" />
    <h2 class="modal-title">${data.title}</h2>
    <p class="modal-author">${data.author}</p>
    <p class="modal-description">${data.description}</p>
    <ul class="modal-books-shops">${createBookSeller(data)}</ul>
    <button class="modal-add-btn" type="button">ADD TO SHOPPING LIST</button>
    </div>
    `
}

function createBookSeller({buy_links}) {
    return buy_links.map(arr => {
        if (arr.name === "Amazon" && "Bookshop" && "Apple Books") {
            console.log(arr.name)
            return `<li>
        <a href="${arr.url}" target="_blank"><svg class="modal-svg" width="24px" height="24px">
        <use href="./images/icons.svg#icon-arms-icon"></use>
        </svg></a>
        </li>
        `}
        }).join('')
    
}


