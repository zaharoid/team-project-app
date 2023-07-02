const icon = {
    amazon: '../../images/image.svg#pattern0',
    Bookshop: '',
    "Apple Books": '',
    closeIcon:"../../images/icons.svg#icon-x-close"
}

    //     <svg class="modal-svg" width="24px" height="24px">
    // <use href='../images/support-ua/action-against-hunger.png'></use>
    // </svg >

        
export function createMarkup(data) {
    return `
    <div class="modal-main">
    <button class="modal_btn_close" type="button">
    <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.3333" d="M24 8l-16 16M8 8l16 16"></path>
        </svg>
    </button>
    <div class="modal_book_info">
    <img class="modal-cover"
    src="${data.book_image}" 
    alt="${data.title}" />
    <div class="modal_text_info">
    <h2 class="modal-title">${data.title}</h2>
    <p class="modal-author">${data.author}</p>
    <p class="modal-description">${data.description}</p>
    <ul class="modal-books-shops">${createBookSeller(data)}</ul></div></div>
    <button class="modal-add-btn" type="button">ADD TO SHOPPING LIST</button>
    </div>
    `
}
function createBookSeller({ buy_links }) {
    return buy_links.map(arr => {
        console.log('arr', arr)
        if (arr.name === "Amazon") {
            return `<li>
        <a href=${arr.url} target="_blank">
        <svg class="modal-svg" width="24px" height="24px">
        <use href=${icon.closeIcon}></use>
        </svg></a>
        </li>
        `}
        if (arr.name === "Bookshop") {
            return `<li>
        <a href="${arr.url}" target="_blank">
        <svg class="modal-svg" width="24px" height="24px">
        <use href='${icon.closeIcon}'></use>
        </svg></a>
        </li>
        `}
        if (arr.name === "Apple Books") {
            return `<li>
        <a href="${arr.url}" target="_blank">
        <svg class="modal-svg" width="24px" height="24px">
        <use href="../../images/icons.svg#icon-x-close"></use>
        </svg></a>
        </li>
        `}
        }).join('')
    
}


