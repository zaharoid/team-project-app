// export function createMarkup(data) {
//     return `
//     <div class="modal-main">
//     <button class="modal_btn_close" type="button">
//     <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.3333" d="M24 8l-16 16M8 8l16 16"></path>
//         </svg>
//     </button>
//     <div class="modal_book_info">
//     <img class="modal-cover"
//     src="${data.book_image}" 
//     alt="${data.title}" />
//     <div class="modal_text_info">
//     <h2 class="modal-title">${data.title}</h2>
//     <p class="modal-author">${data.author}</p>
//     <p class="modal-description">${data.description}</p>
//     <ul class="modal-books-shops">${createBookSeller(data)}</ul></div></div>
//     <button class="modal-add-btn" type="button">ADD TO SHOPPING LIST</button>
//     </div>
//     `
// }

// export function createBookSeller({ buy_links }) {
//     return buy_links.map(arr => {
//         if (arr.name === "Amazon") {
//             return `<li>
//         <a href=${arr.url} target="_blank">
//         <svg class="modal-svg" width="24px" height="24px">
//         <use href=""></use>
//         </svg></a>
//         </li>
//         `}
//         if (arr.name === "Bookshop") {
//             return `<li>
//         <a href="${arr.url}" target="_blank">
//         <svg class="modal-svg" width="24px" height="24px">
//         <use href='../../images/logo.png'></use>
//         </svg></a>
//         </li>
//         `}
//         if (arr.name === "Apple Books") {
//             return `<li>
//         <a class="modal_icon_create" href="${arr.url}" target="_blank">
//                 <svg class="modal-svg" width="24px" height="24px">
//         <use href=''></use>
//         </svg></a>
//         </li>
//         `}
//         }).join('')
// }
