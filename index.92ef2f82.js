function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},r.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"7bk21":"index.92ef2f82.js","ljMJW":"save-the-children.afa9e55b.png","gY1tF":"project-hope.6b951dc9.png","ibwo6":"international-medical-corps.38e7f653.png","8dNy0":"razom.61fc7ccd.png","ft6U1":"action-against-hunger.2a8c3c0d.png","3PaSI":"serhiy-prytula.69cae55e.png","hMNVA":"united24.7e58352b.png","eK3Ks":"medecins-sans-frontieres.9cc61963.png","kFlNH":"world-vision.544fa60d.png","cZUbX":"save-the-children2x.688b6dc7.png","dZnsA":"project-hope2x.ee6ab1e6.png","bwGiv":"international-medical-corps2x.2c438457.png","e2COv":"razom2x.49347143.png","8DGUa":"action-against-hunger2x.68b93551.png","bACnJ":"serhiy-prytula2x.b3afcdef.png","iBcPS":"united24-2x.d41967f5.png","bhhC2":"medecins-sans-frontieres2x.b0544e06.png","3Dl6E":"world-vision2x.01220224.png"}'));var a;a=new URL(i("kyEFX").resolve("ljMJW"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("gY1tF"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("ibwo6"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("8dNy0"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("ft6U1"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("3PaSI"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("hMNVA"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("eK3Ks"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("kFlNH"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("cZUbX"),import.meta.url).toString();var h;h=new URL(i("kyEFX").resolve("dZnsA"),import.meta.url).toString();var v;v=new URL(i("kyEFX").resolve("bwGiv"),import.meta.url).toString();var y;y=new URL(i("kyEFX").resolve("e2COv"),import.meta.url).toString();var S;S=new URL(i("kyEFX").resolve("8DGUa"),import.meta.url).toString();var k;k=new URL(i("kyEFX").resolve("bACnJ"),import.meta.url).toString();var b;b=new URL(i("kyEFX").resolve("iBcPS"),import.meta.url).toString();var w;w=new URL(i("kyEFX").resolve("bhhC2"),import.meta.url).toString();var E;E=new URL(i("kyEFX").resolve("3Dl6E"),import.meta.url).toString();const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(a),img2x:t(f)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(l),img2x:t(h)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(s),img2x:t(v)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(c),img2x:t(y)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(u),img2x:t(S)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(d),img2x:t(k)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(g),img2x:t(b)},{title:"Medecins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(m),img2x:t(w)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(p),img2x:t(E)}],F=document.querySelector(".js-support"),H=_.map((({title:e,url:t,img:r,img2x:o},n)=>`<li class="support-link js-support">\n        <a class="js-target" href="${t}" target="_blank">\n          <span class="support-number">${String(n+1).padStart(2,"0")}\n          <img class="support-img" srcset="${r} 1x, ${o} 2x"\n          src="${r}" alt="${e}"/></span>\n        </a>\n      </li>`)).join("");F.insertAdjacentHTML("beforeend",H),F.addEventListener("click",(function(e){if(!e.target.classList.contains("js-support"))return}));let L=0;document.querySelector(".slider-container");const R=document.querySelector(".support-list"),x=document.querySelector(".slider-button"),A=document.querySelectorAll(".support-link");let U=A.length;A.forEach((e=>{e.style.minHeight="32px"})),x.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?U-(Math.abs(L)+192)/39:e>=768?U-(Math.abs(L)+192)/40:U-(Math.abs(L)+192)/55})()>=1?L-=32:L=0,R.style.transition="transform 0.3s ease-out",X(),setTimeout((()=>{R.style.transition=""}),300)})),window.addEventListener("resize",(()=>{U=A.length,X()}));const X=()=>{R.style.transform=`translateY(${L}px)`};const j={divEl:document.querySelector(".category-list")};fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{e.map((e=>{const t=`<li class="list category-item">\n        <a class="link category-link" href="#">${e.list_name}</a>\n      </li>`;j.divEl.insertAdjacentHTML("beforeend",t)}))})),j.divEl.addEventListener("click",(function(e){if(!e.target.classList.contains("category-link"))return;e.preventDefault()}));const q={categoriesList:document.querySelector(".categories-list")};fetch("https://books-backend.p.goit.global/books/top-books").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((async function(e){let t=[];e.forEach((e=>{let r=`<li class="category">\n    <h3>${e.books[0].list_name}</h3>\n    <ul class="bookslist">`,o="";e.books.map((e=>{t.push(e),o+=`\n      <li class="book-card" data-id="${e._id}">\n        <div class="thumb">\n          <img class="book-cover" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n        </div>\n        <h4 class="book-title">${e.title}</h4>\n        <p>${e.author}</p>\n      </li>`})),r=r+o+'</ul><div class="button-container"><button>See more</button></div></li>',q.categoriesList.insertAdjacentHTML("beforeend",r)})),localStorage.setItem("books",JSON.stringify(t))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".switch input");function t(){try{if("dark"===localStorage.getItem("theme")){document.querySelector("html").classList.add("dark"),document.querySelector(".categories-list").classList.add("categories-text-color-dark");const e=document.querySelectorAll("p");console.log("get all p",e),e.forEach((e=>{e.classList.add("color-grey")}))}else{document.querySelector("html").classList.remove("dark"),document.querySelector(".categories-list").classList.remove("categories-text-color-dark"),document.querySelector(".categories-list li").classList.remove("color-grey");const e=document.querySelectorAll("p");console.log("all p",e),e.forEach((e=>{e.classList.remove("color-grey")}))}}catch(e){console.log(e)}}function r(){const e=document.querySelector(".slider");"dark"===localStorage.getItem("theme")?e.classList.add("dark"):e.classList.remove("dark")}e.checked="dark"===localStorage.getItem("theme"),document.querySelector(".switch").addEventListener("click",(o=>{const n=e.checked?"dark":"";console.log("theme",n),"dark"===n?(localStorage.setItem("theme","dark"),localStorage.setItem("p","color-grey")):(localStorage.removeItem("theme"),localStorage.removeItem("p","color-grey")),t(),r()})),t(),r()}));
//# sourceMappingURL=index.92ef2f82.js.map