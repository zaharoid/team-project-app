function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"7bk21":"index.5bf1775d.js","ljMJW":"save-the-children.afa9e55b.png","gY1tF":"project-hope.6b951dc9.png","ibwo6":"international-medical-corps.38e7f653.png","8dNy0":"razom.61fc7ccd.png","ft6U1":"action-against-hunger.2a8c3c0d.png","3PaSI":"serhiy-prytula.69cae55e.png","hMNVA":"united24.7e58352b.png","eK3Ks":"medecins-sans-frontieres.9cc61963.png","kFlNH":"world-vision.544fa60d.png","cZUbX":"save-the-children2x.688b6dc7.png","dZnsA":"project-hope2x.ee6ab1e6.png","bwGiv":"international-medical-corps2x.2c438457.png","e2COv":"razom2x.49347143.png","8DGUa":"action-against-hunger2x.68b93551.png","bACnJ":"serhiy-prytula2x.b3afcdef.png","iBcPS":"united24-2x.d41967f5.png","bhhC2":"medecins-sans-frontieres2x.b0544e06.png","3Dl6E":"world-vision2x.01220224.png"}'));var o;o=new URL(r("kyEFX").resolve("ljMJW"),import.meta.url).toString();var a;a=new URL(r("kyEFX").resolve("gY1tF"),import.meta.url).toString();var l;l=new URL(r("kyEFX").resolve("ibwo6"),import.meta.url).toString();var c;c=new URL(r("kyEFX").resolve("8dNy0"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("ft6U1"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("3PaSI"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("hMNVA"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("eK3Ks"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("kFlNH"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("cZUbX"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("dZnsA"),import.meta.url).toString();var g;g=new URL(r("kyEFX").resolve("bwGiv"),import.meta.url).toString();var y;y=new URL(r("kyEFX").resolve("e2COv"),import.meta.url).toString();var v;v=new URL(r("kyEFX").resolve("8DGUa"),import.meta.url).toString();var b;b=new URL(r("kyEFX").resolve("bACnJ"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("iBcPS"),import.meta.url).toString();var C;C=new URL(r("kyEFX").resolve("bhhC2"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("3Dl6E"),import.meta.url).toString();const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(o),img2x:t(f)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(a),img2x:t(m)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(l),img2x:t(g)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(c),img2x:t(y)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(h),img2x:t(v)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(u),img2x:t(b)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(d),img2x:t(w)},{title:"Medecins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(p),img2x:t(C)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(_),img2x:t(E)}],I=document.querySelector(".js-support"),k=S.map((({title:e,url:t,img:n,img2x:i},s)=>`<li class="support-link js-support">\n        <a class="js-target" href="${t}" target="_blank">\n          <span class="support-number">${String(s+1).padStart(2,"0")}\n          <img class="support__img" srcset="${n} 1x, ${i} 2x"\n          src="${n}" alt="${e}"/></span>\n        </a>\n      </li>`)).join("");I.insertAdjacentHTML("beforeend",k),I.addEventListener("click",(function(e){if(!e.target.classList.contains("js-support"))return}));let T=0;document.querySelector(".slider-container");const N=document.querySelector(".support-list"),R=document.querySelector(".slider-button"),P=document.querySelectorAll(".support-link");let D=P.length;P.forEach((e=>{e.style.minHeight="32px"})),R.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?D-(Math.abs(T)+192)/39:e>=768?D-(Math.abs(T)+192)/40:D-(Math.abs(T)+192)/55})()>=1?T-=32:T=0,N.style.transition="transform 0.3s ease-out",x(),setTimeout((()=>{N.style.transition=""}),300)})),window.addEventListener("resize",(()=>{D=P.length,x()}));const x=()=>{N.style.transform=`translateY(${T}px)`};const A=e=>fetch(`https://books-backend.p.goit.global/books/${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})),L={divEl:document.querySelector(".category-list"),allcategory:document.querySelector(".all-category"),onecategoryEl:document.querySelector(".category-link"),categoriesList:document.querySelector(".books-in-categories-list")};fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{e.map((e=>{const t=`<li class="list category-item">\n        <a class="link category-link" href="#">${e.list_name}</a>\n      </li>`;L.divEl.insertAdjacentHTML("beforeend",t)}))})),L.divEl.addEventListener("click",(function(e){if(!e.target.classList.contains("category-link"))return;e.preventDefault();let t=document.querySelector(".is-active");t&&t.classList.remove("is-active");e.target.classList.add("is-active");let n=document.querySelector(".booklist-title"),i=e.target.textContent;n.textContent=i,L.categoriesList.classList.add("render-category"),(s=e.target.textContent,fetch(`https://books-backend.p.goit.global/books/category?category=${s}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))).then((e=>{return t=e.map((({author:e,title:t,book_image:n,_id:i})=>`\n      <li class="book-card render-item-card" data-id="${i}">\n        <div class="thumb">\n          <img class="book-cover" src="${n}" alt="${t}" loading="lazy" />\n        </div>\n        <h4 class="render-title">${t}</h4>\n        <p class="render-author">${e}</p>\n      </li>`)).join(""),void(L.categoriesList.innerHTML=t);var t}));var s}));const M={categoriesList:document.querySelector(".books-in-categories-list")};fetch("https://books-backend.p.goit.global/books/top-books").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((async function(e){let t=[];e.forEach((e=>{let n=`<li class="category-item">\n    <h3>${e.books[0].list_name}</h3>\n    <ul class="bookslist">`,i="";e.books.map((e=>{t.push(e),i+=`\n      <li class="book-card" data-id="${e._id}">\n        <div class="thumb">\n          <img class="book-cover" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n        </div>\n        <h4 class="book-title">${e.title}</h4>\n        <p>${e.author}</p>\n      </li>`})),n=n+i+`</ul><div class="button-container" ><button class="books-by-category" data-category-name="${e.books[0].list_name}">See more</button></div></li>`,M.categoriesList.insertAdjacentHTML("beforeend",n)})),localStorage.setItem("books",JSON.stringify(t))})),M.categoriesList.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".switch input");function t(){try{"dark"===localStorage.getItem("theme")?document.querySelector("body").classList.toggle("dark-theme"):document.querySelector("body").classList.remove("dark-theme")}catch(e){console.log(e)}}e.checked="dark"===localStorage.getItem("theme"),document.querySelector(".switch").addEventListener("click",(n=>{"dark"===(e.checked?"dark":"")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),t()})),t(),function(){const e=document.querySelector(".slider");"dark"===localStorage.getItem("theme")?e.classList.add("dark-theme"):e.classList.remove("dark-theme")}()}));const O="../../images/icons.svg#icon-x-close";function F(e){return`\n    <div class="modal-main">\n    <button class="modal_btn_close" type="button">\n    <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.3333" d="M24 8l-16 16M8 8l16 16"></path>\n        </svg>\n    </button>\n    <div class="modal_book_info">\n    <img class="modal-cover"\n    src="${e.book_image}" \n    alt="${e.title}" />\n    <div class="modal_text_info">\n    <h2 class="modal-title">${e.title}</h2>\n    <p class="modal-author">${e.author}</p>\n    <p class="modal-description">${e.description}</p>\n    <ul class="modal-books-shops">${function({buy_links:e}){return e.map((e=>"Amazon"===e.name?`<li>\n        <a href=${e.url} target="_blank">\n        <svg class="modal-svg" width="24px" height="24px">\n        <use href=${O}></use>\n        </svg></a>\n        </li>\n        `:"Bookshop"===e.name?`<li>\n        <a href="${e.url}" target="_blank">\n        <svg class="modal-svg" width="24px" height="24px">\n        <use href='${O}'></use>\n        </svg></a>\n        </li>\n        `:"Apple Books"===e.name?`<li>\n        <a href="${e.url}" target="_blank">\n        <svg class="modal-svg" width="24px" height="24px">\n        <use href="../../images/icons.svg#icon-x-close"></use>\n        </svg></a>\n        </li>\n        `:void 0)).join("")}(e)}</ul></div></div>\n    <button class="modal-add-btn" type="button">ADD TO SHOPPING LIST</button>\n    </div>\n    `}let q=document.querySelector("body"),U=document.querySelector(".modal_window");function H(){q.classList.remove("no_scroll"),U.classList.remove("overlay"),U.innerHTML="",q.removeEventListener("click",W),q.removeEventListener("keydown",j)}function W(e){e.target===U&&H()}function j(e){"Escape"===e.code&&H()}q.addEventListener("click",(function(){document.querySelector("[data-id]");document.querySelectorAll("[data-id]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.id;A(t).then((e=>{U.innerHTML=F(e),U.classList.add("overlay"),q.classList.add("no_scroll"),document.querySelector(".modal_btn_close").addEventListener("click",H),q.addEventListener("click",W),q.addEventListener("keydown",j),q.addEventListener("scroll",(e=>{e.preventDefault()}))})).catch((e=>{console.log("Error:",e)}))}))}))}));const B=document.querySelector(".icon-menu-open"),$=document.querySelector(".header-icon-open"),z=document.querySelector(".header-icon-close");B.addEventListener("click",(function(e){$.classList.toggle("icon-display-none"),z.classList.toggle("icon-display-none")}));var V,K,G,Y=V={};function X(){throw new Error("setTimeout has not been defined")}function Q(){throw new Error("clearTimeout has not been defined")}function J(e){if(K===setTimeout)return setTimeout(e,0);if((K===X||!K)&&setTimeout)return K=setTimeout,setTimeout(e,0);try{return K(e,0)}catch(t){try{return K.call(null,e,0)}catch(t){return K.call(this,e,0)}}}!function(){try{K="function"==typeof setTimeout?setTimeout:X}catch(e){K=X}try{G="function"==typeof clearTimeout?clearTimeout:Q}catch(e){G=Q}}();var Z,ee=[],te=!1,ne=-1;function ie(){te&&Z&&(te=!1,Z.length?ee=Z.concat(ee):ne=-1,ee.length&&se())}function se(){if(!te){var e=J(ie);te=!0;for(var t=ee.length;t;){for(Z=ee,ee=[];++ne<t;)Z&&Z[ne].run();ne=-1,t=ee.length}Z=null,te=!1,function(e){if(G===clearTimeout)return clearTimeout(e);if((G===Q||!G)&&clearTimeout)return G=clearTimeout,clearTimeout(e);try{G(e)}catch(t){try{return G.call(null,e)}catch(t){return G.call(this,e)}}}(e)}}function re(e,t){this.fun=e,this.array=t}function oe(){}Y.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ee.push(new re(e,t)),1!==ee.length||te||J(se)},re.prototype.run=function(){this.fun.apply(null,this.array)},Y.title="browser",Y.browser=!0,Y.env={},Y.argv=[],Y.version="",Y.versions={},Y.on=oe,Y.addListener=oe,Y.once=oe,Y.off=oe,Y.removeListener=oe,Y.removeAllListeners=oe,Y.emit=oe,Y.prependListener=oe,Y.prependOnceListener=oe,Y.listeners=function(e){return[]},Y.binding=function(e){throw new Error("process.binding is not supported")},Y.cwd=function(){return"/"},Y.chdir=function(e){throw new Error("process.chdir is not supported")},Y.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ae=!1,le=!1,ce="${JSCORE_VERSION}",he=function(e,t){if(!e)throw ue(t)},ue=function(e){return new Error("Firebase Database ("+ce+") INTERNAL ASSERT FAILED: "+e)},de=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},pe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(de(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new _e;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fe=function(e){const t=de(e);return pe.encodeByteArray(t,!0)},me=function(e){return fe(e).replace(/\./g,"")},ge=function(e){try{return pe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(e){return ve(void 0,e)}function ve(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ve(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,we=()=>{try{return be()||(()=>{if(void 0===V||void 0===V.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ge(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Ce=e=>{const t=(e=>{var t,n;return null===(n=null===(t=we())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Ee=()=>{var e;return null===(e=we())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[me(JSON.stringify({alg:"none",type:"JWT"})),me(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Te(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Ne(){return!0===ae||!0===le}function Re(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(xe,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Pe(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const xe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){return JSON.parse(e)}function Le(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=Ae(ge(r[0])||""),n=Ae(ge(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},Oe=function(e){const t=Me(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Fe=function(e){const t=Me(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ue(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function He(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function We(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function je(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Be(n)&&Be(r)){if(!je(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Be(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $e(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Ve(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Ge=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(e){return e&&e._delegate?e._delegate:e}class Xe{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Se;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Je{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=[];var et,tt;(tt=et||(et={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";const nt={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},it=et.INFO,st={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},rt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=st[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ot{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?nt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}constructor(e){this.name=e,this._logLevel=it,this._logHandler=rt,this._userLogHandler=null,Ze.push(this)}}let at,lt;const ct=new WeakMap,ht=new WeakMap,ut=new WeakMap,dt=new WeakMap,pt=new WeakMap;let _t={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ht.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ut.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ft(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(yt(this),t),gt(ct.get(this))}:function(...t){return gt(e.apply(yt(this),t))}:function(t,...n){const i=e.call(yt(this),t,...n);return ut.set(i,t.sort?t.sort():[t]),gt(i)}}function mt(e){return"function"==typeof e?ft(e):(e instanceof IDBTransaction&&function(e){if(ht.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));ht.set(e,t)}(e),t=e,(at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,_t):e);var t}function gt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(gt(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ct.set(t,e)})).catch((()=>{})),pt.set(t,e),t}(e);if(dt.has(e))return dt.get(e);const t=mt(e);return t!==e&&(dt.set(e,t),pt.set(t,e)),t}const yt=e=>pt.get(e);function vt(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=gt(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(gt(o.result),e.oldVersion,e.newVersion,gt(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const bt=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],Ct=new Map;function Et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ct.get(t))return Ct.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=wt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!bt.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Ct.set(t,r),r}_t=(e=>({...e,get:(t,n,i)=>Et(t,n)||e.get(t,n,i),has:(t,n)=>!!Et(t,n)||e.has(t,n)}))(_t);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const It=new ot("@firebase/app"),kt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Tt=new Map,Nt=new Map;function Rt(e,t){try{e.container.addComponent(t)}catch(n){It.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pt(e){const t=e.name;if(Nt.has(t))return It.debug(`There were multiple attempts to register component ${t}.`),!1;Nt.set(t,e);for(const t of Tt.values())Rt(t,e);return!0}function Dt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt=new De("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xe("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e="[DEFAULT]"){const t=Tt.get(e);if(!t&&"[DEFAULT]"===e&&Ee())return function(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=Ee()),!n)throw xt.create("no-options");const r=Tt.get(s);if(r){if(je(n,r.options)&&je(i,r.config))return r;throw xt.create("duplicate-app",{appName:s})}const o=new Je(s);for(const e of Nt.values())o.addComponent(e);const a=new At(n,i,o);return Tt.set(s,a),a}();if(!t)throw xt.create("no-app",{appName:e});return t}function Mt(e,t,n){var i;let s=null!==(i=kt[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void It.warn(e.join(" "))}Pt(new Xe(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ot=null;function Ft(){return Ot||(Ot=vt("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})}))),Ot}async function qt(e,t){try{const n=(await Ft()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,Ut(e)),await n.done}catch(e){if(e instanceof Pe)It.warn(e.message);else{const t=xt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});It.warn(t.message)}}}function Ut(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Wt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Wt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Bt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=me(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Wt(){return(new Date).toISOString().substring(0,10)}class jt{async runIndexedDBEnvironmentCheck(){return!!Re()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Ft();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ut(e))}catch(e){if(e instanceof Pe)It.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});It.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Bt(e){return me(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;$t="",Pt(new Xe("platform-logger",(e=>new St(e)),"PRIVATE")),Pt(new Xe("heartbeat",(e=>new Ht(e)),"PRIVATE")),Mt("@firebase/app","0.9.13",$t),Mt("@firebase/app","0.9.13","esm2017"),Mt("fire-js","");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ae(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Vt(t)}}catch(e){}return new Kt},Yt=Gt("localStorage"),Xt=Gt("sessionStorage"),Qt=new ot("@firebase/database"),Jt=function(){let e=1;return function(){return e++}}(),Zt=function(e){const t=Ke(e),n=new ze;n.update(t);const i=n.digest();return pe.encodeByteArray(i)},en=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=en.apply(null,i):t+="object"==typeof i?Le(i):i,t+=" "}return t};let tn=null,nn=!0;const sn=function(e,t){he(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Qt.logLevel=et.VERBOSE,tn=Qt.log.bind(Qt),t&&Xt.set("logging_enabled",!0)):"function"==typeof e?tn=e:(tn=null,Xt.remove("logging_enabled"))},rn=function(...e){if(!0===nn&&(nn=!1,null===tn&&!0===Xt.get("logging_enabled")&&sn(!0)),tn){const t=en.apply(null,e);tn(t)}},on=function(e){return function(...t){rn(e,...t)}},an=function(...e){const t="FIREBASE INTERNAL ERROR: "+en(...e);Qt.error(t)},ln=function(...e){const t=`FIREBASE FATAL ERROR: ${en(...e)}`;throw Qt.error(t),new Error(t)},cn=function(...e){const t="FIREBASE WARNING: "+en(...e);Qt.warn(t)},hn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},un=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=vn(e),i=vn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},dn=function(e,t){return e===t?0:e<t?-1:1},pn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Le(t))},_n=function(e){if("object"!=typeof e||null===e)return Le(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Le(t[i]),n+=":",n+=_n(e[t[i]]);return n+="}",n},fn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function mn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gn=function(e){he(!hn(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const yn=new RegExp("^-?(0*)\\d{1,10}$"),vn=function(e){if(yn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},bn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw cn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},wn=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){cn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',cn(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Sn{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Sn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}}function Tn(e,t,n){let i;if(he("string"==typeof t,"typeof type must == string"),he("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return mn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{incrementCounter(e,t=1){qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ye(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={},Pn={};function Dn(e){const t=e.toString();return Rn[t]||(Rn[t]=new Nn),Rn[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&bn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ne()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ln(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&In.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){An.forceAllow_=!0}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){return!Ne()&&(!!An.forceAllow_||!(An.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=fe(t),i=fn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ne())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=on(e),this.stats_=Dn(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Tn(t,"long_polling",e))}}class Ln{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ne()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ne())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Jt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ln.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){rn("frame writing exception"),e.stack&&rn(e.stack),rn(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;"undefined"!=typeof MozWebSocket?Mn=MozWebSocket:"undefined"!=typeof WebSocket&&(Mn=WebSocket);class On{static connectionURL_(e,t,n,i,s){const r={v:"5"};return!Ne()&&"undefined"!=typeof location&&location.hostname&&In.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),Tn(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let e;if(Ne()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${zt}/${V.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Mn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Mn&&!On.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||!0===Yt.get("previous_websocket_failure")}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Ae(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=fn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=on(this.connId),this.stats_=Dn(t),this.connURL=On.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}On.responsesRequiredToBeHealthy=2,On.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{static get ALL_TRANSPORTS(){return[An,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=On&&On.isAvailable();let n=t&&!On.previouslyFailed();if(e.webSocketOnly&&(t||cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[On];else{const e=this.transports_=[];for(const t of Fn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Fn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Fn.globalTransportInitialized_=!1;class qn{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=pn("t",e),n=pn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=pn("t",e),n=pn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=pn("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?an("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):an("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),wn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=on("c:"+this.id+":"),this.transportManager_=new Fn(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){he(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Hn{static getInstance(){return new Wn}getInitialEvent(e){return he("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Te()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Bn(){return new jn("")}function $n(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function zn(e){return e.pieces_.length-e.pieceNum_}function Vn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new jn(e.pieces_,t)}function Kn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Gn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Yn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new jn(t,0)}function Xn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof jn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new jn(n,0)}function Qn(e){return e.pieceNum_>=e.pieces_.length}function Jn(e,t){const n=$n(e),i=$n(t);if(null===n)return t;if(n===i)return Jn(Vn(e),Vn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Zn(e,t){if(zn(e)!==zn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ei(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(zn(e)>zn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ti{constructor(e,t){this.errorPrefix_=t,this.parts_=Gn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ge(this.parts_[e]);ni(this)}}function ni(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ii(e))}function ii(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Hn{static getInstance(){return new si}getInitialEvent(e){return he("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Un{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Le(s)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Se,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;ri.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&qe(e,"w")){const n=Ue(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Fe(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Oe(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):an("Unrecognized action received from server: "+Le(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ri.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){he(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new qn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{cn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&cn(e),a())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],He(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>_n(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new jn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ne()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+zt.replace(/\./g,"-")]=1,Te()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wn.getInstance().currentlyOnline();return He(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ri.nextPersistentConnectionId_++,this.log_=on("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ne())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");si.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Wn.getInstance().on("online",this.onOnline_,this)}}ri.nextPersistentConnectionId_=0,ri.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{static Wrap(e,t){return new oi(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new oi("[MIN_NAME]",e),i=new oi("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return oi.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class ci extends ai{static get __EMPTY_NODE(){return li}static set __EMPTY_NODE(e){li=e}compare(e,t){return un(e.name,t.name)}isDefinedOn(e){throw ue("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return oi.MIN}maxPost(){return new oi("[MAX_NAME]",li)}makePost(e,t){return he("string"==typeof e,"KeyIndex indexValue must always be a string."),new oi(e,li)}toString(){return".key"}}const hi=new ci;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class di{copy(e,t,n,i,s){return new di(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return pi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,di.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,di.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:di.RED,this.left=null!=i?i:pi.EMPTY_NODE,this.right=null!=s?s:pi.EMPTY_NODE}}di.RED=!0,di.BLACK=!1;class pi{insert(e,t){return new pi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,di.BLACK,null,null))}remove(e){return new pi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,di.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ui(this.root_,null,this.comparator_,!0,e)}constructor(e,t=pi.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _i(e,t){return un(e.name,t.name)}function fi(e,t){return un(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;pi.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new di(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const gi=function(e){return"number"==typeof e?"number:"+gn(e):"string:"+e},yi=function(e){if(e.isLeafNode()){const t=e.val();he("string"==typeof t||"number"==typeof t||"object"==typeof t&&qe(t,".sv"),"Priority must be a string or number.")}else he(e===mi||e.isEmpty(),"priority of unexpected type.");he(e===mi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let vi,bi,wi;class Ci{static set __childrenNodeConstructor(e){vi=e}static get __childrenNodeConstructor(){return vi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ci(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ci.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Qn(e)?this:".priority"===$n(e)?this.priorityNode_:Ci.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ci.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=$n(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(he(".priority"!==n||1===zn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ci.__childrenNodeConstructor.EMPTY_NODE.updateChild(Vn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gn(this.value_):this.value_,this.lazyHash_=Zt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ci.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ci.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ci.VALUE_TYPE_ORDER.indexOf(t),s=Ci.VALUE_TYPE_ORDER.indexOf(n);return he(i>=0,"Unknown leaf type: "+t),he(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Ci.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),yi(this.priorityNode_)}}Ci.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ei=new class extends ai{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?un(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return oi.MIN}maxPost(){return new oi("[MAX_NAME]",new Ci("[PRIORITY-POST]",wi))}makePost(e,t){const n=bi(e);return new oi(t,new Ci("[PRIORITY-POST]",n))}toString(){return".priority"}},Si=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Si,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const ki=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new di(a,o.node,di.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new di(a,o.node,di.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new di(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,di.BLACK):(a(i,di.BLACK),a(i,di.RED))}return r}(new Ii(e.length));return new pi(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const Ni={};class Ri{static get Default(){return he(Ni&&Ei,"ChildrenNode.ts has not been loaded"),Ti=Ti||new Ri({".priority":Ni},{".priority":Ei}),Ti}get(e){const t=Ue(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pi?t:null}hasIndex(e){return qe(this.indexSet_,e.toString())}addIndex(e,t){he(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(oi.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ki(n,e.getCompare()):Ni;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new Ri(c,l)}addToIndexes(e,t){const n=We(this.indexes_,((n,i)=>{const s=Ue(this.indexSet_,i);if(he(s,"Missing index implementation for "+i),n===Ni){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(oi.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ki(n,s.getCompare())}return Ni}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new oi(e.name,i))),s.insert(e,e.node)}}));return new Ri(n,this.indexSet_)}removeFromIndexes(e,t){const n=We(this.indexes_,(n=>{if(n===Ni)return n;{const i=t.get(e.name);return i?n.remove(new oi(e.name,i)):n}}));return new Ri(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Di{static get EMPTY_NODE(){return Pi||(Pi=new Di(new pi(fi),null,Ri.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new Di(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Pi:t}}getChild(e){const t=$n(e);return null===t?this:this.getImmediateChild(t).getChild(Vn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new oi(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Pi:this.priorityNode_;return new Di(i,r,s)}}updateChild(e,t){const n=$n(e);if(null===n)return t;{he(".priority"!==$n(e)||1===zn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Vn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ei,((r,o)=>{t[r]=o.val(e),n++,s&&Di.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+gi(this.getPriority().val())+":"),this.forEachChild(Ei,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Zt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new oi(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new oi(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new oi(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,oi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,oi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xi?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Di(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ei),n=t.getIterator(Ei);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&yi(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Di.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const xi=new class extends Di{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Di.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new pi(fi),Di.EMPTY_NODE,Ri.Default)}};Object.defineProperties(oi,{MIN:{value:new oi("[MIN_NAME]",Di.EMPTY_NODE)},MAX:{value:new oi("[MAX_NAME]",xi)}}),ci.__EMPTY_NODE=Di.EMPTY_NODE,Ci.__childrenNodeConstructor=Di,mi=xi,function(e){wi=e}(xi);function Ai(e,t=null){if(null===e)return Di.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),he(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ci(e,Ai(t))}if(e instanceof Array){let n=Di.EMPTY_NODE;return mn(e,((t,i)=>{if(qe(e,t)&&"."!==t.substring(0,1)){const e=Ai(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ai(t))}{const n=[];let i=!1;if(mn(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Ai(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new oi(e,s)))}})),0===n.length)return Di.EMPTY_NODE;const s=ki(n,_i,(e=>e.name),fi);if(i){const e=ki(n,Ei.getCompare());return new Di(s,Ai(t),new Ri({".priority":e},{".priority":Ei}))}return new Di(s,Ai(t),Ri.Default)}}!function(e){bi=e}(Ai);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li extends ai{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?un(e.name,t.name):s}makePost(e,t){const n=Ai(e),i=Di.EMPTY_NODE.updateChild(this.indexPath_,n);return new oi(t,i)}maxPost(){const e=Di.EMPTY_NODE.updateChild(this.indexPath_,xi);return new oi("[MAX_NAME]",e)}toString(){return Gn(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,he(!Qn(e)&&".priority"!==$n(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new class extends ai{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?un(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return oi.MIN}maxPost(){return oi.MAX}makePost(e,t){const n=Ai(e);return new oi(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e){return{type:"value",snapshotNode:e}}function Fi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function qi(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ui(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ei}copy(){const e=new Hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ei}}function Wi(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ei?n="$priority":e.index_===Mi?n="$value":e.index_===hi?n="$key":(he(e.index_ instanceof Li,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Le(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Le(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Le(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Le(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Le(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ji(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ei&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Un{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Bi.getListenId_(e,n),o={};this.listens_[r]=o;const a=Wi(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),Ue(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Bi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Wi(e._queryParams),n=e._path.toString(),i=new Se;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$e(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Ae(o.responseText)}catch(e){cn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&cn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=on("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Di.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return{value:null,children:new Map}}function Vi(e,t,n){if(Qn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=$n(t);e.children.has(i)||e.children.set(i,zi());Vi(e.children.get(i),t=Vn(t),n)}}function Ki(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ki(i,new jn(t.toString()+"/"+e),n)}))}class Gi{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;mn(e,((e,i)=>{i>0&&qe(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),wn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Gi(e);const n=1e4+2e4*Math.random();wn(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi,Qi;function Ji(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Qi=Xi||(Xi={}))[Qi.OVERWRITE=0]="OVERWRITE",Qi[Qi.MERGE=1]="MERGE",Qi[Qi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Qi[Qi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Zi{operationForChild(e){if(Qn(this.path)){if(null!=this.affectedTree.value)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new jn(e));return new Zi(Bn(),t,this.revert)}}return he($n(this.path)===e,"operationForChild called for unrelated child."),new Zi(Vn(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Xi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{operationForChild(e){return Qn(this.path)?new es(this.source,Bn(),this.snap.getImmediateChild(e)):new es(this.source,Vn(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Xi.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{operationForChild(e){if(Qn(this.path)){const t=this.children.subtree(new jn(e));return t.isEmpty()?null:t.value?new es(this.source,Bn(),t.value):new ts(this.source,Bn(),t)}return he($n(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ts(this.source,Vn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Xi.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Qn(e))return this.isFullyInitialized()&&!this.filtered_;const t=$n(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ue("Should only compare child_ events.");const i=new oi(t.childName,t.snapshotNode),s=new oi(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function ss(e,t){return{eventCache:e,serverCache:t}}function rs(e,t,n,i){return ss(new ns(t,n,i),e.serverCache)}function os(e,t,n,i){return ss(e.eventCache,new ns(t,n,i))}function as(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ls(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;class hs{static fromObject(e){let t=new hs(null);return mn(e,((e,n)=>{t=t.set(new jn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Bn(),value:this.value};if(Qn(e))return null;{const n=$n(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Vn(e),t);if(null!=s){return{path:Xn(new jn(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Qn(e))return this;{const t=$n(e),n=this.children.get(t);return null!==n?n.subtree(Vn(e)):new hs(null)}}set(e,t){if(Qn(e))return new hs(t,this.children);{const n=$n(e),i=(this.children.get(n)||new hs(null)).set(Vn(e),t),s=this.children.insert(n,i);return new hs(this.value,s)}}remove(e){if(Qn(e))return this.children.isEmpty()?new hs(null):new hs(null,this.children);{const t=$n(e),n=this.children.get(t);if(n){const i=n.remove(Vn(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new hs(null):new hs(this.value,s)}return this}}get(e){if(Qn(e))return this.value;{const t=$n(e),n=this.children.get(t);return n?n.get(Vn(e)):null}}setTree(e,t){if(Qn(e))return t;{const n=$n(e),i=(this.children.get(n)||new hs(null)).setTree(Vn(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new hs(this.value,s)}}fold(e){return this.fold_(Bn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Xn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Bn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Qn(e))return null;{const i=$n(e),s=this.children.get(i);return s?s.findOnPath_(Vn(e),Xn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Bn(),t)}foreachOnPath_(e,t,n){if(Qn(e))return this;{this.value&&n(t,this.value);const i=$n(e),s=this.children.get(i);return s?s.foreachOnPath_(Vn(e),Xn(t,i),n):new hs(null)}}foreach(e){this.foreach_(Bn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Xn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(cs||(cs=new pi(dn)),cs))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static empty(){return new us(new hs(null))}constructor(e){this.writeTree_=e}}function ds(e,t,n){if(Qn(t))return new us(new hs(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Jn(s,t);return r=r.updateChild(o,n),new us(e.writeTree_.set(s,r))}{const i=new hs(n),s=e.writeTree_.setTree(t,i);return new us(s)}}}function ps(e,t,n){let i=e;return mn(n,((e,n)=>{i=ds(i,Xn(t,e),n)})),i}function _s(e,t){if(Qn(t))return us.empty();{const n=e.writeTree_.setTree(t,new hs(null));return new us(n)}}function fs(e,t){return null!=ms(e,t)}function ms(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Jn(n.path,t)):null}function gs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ei,((e,n)=>{t.push(new oi(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new oi(e,n.value))})),t}function ys(e,t){if(Qn(t))return e;{const n=ms(e,t);return new us(null!=n?new hs(n):e.writeTree_.subtree(t))}}function vs(e){return e.writeTree_.isEmpty()}function bs(e,t){return ws(Bn(),e.writeTree_,t)}function ws(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(he(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=ws(Xn(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Xn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){return Ms(t,e)}function Es(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ss(t,i.path)?s=!1:ei(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=ks(e.allWrites,Is,Bn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=_s(e.visibleWrites,i.path);else{mn(i.children,(t=>{e.visibleWrites=_s(e.visibleWrites,Xn(i.path,t))}))}return!0}return!1}function Ss(e,t){if(e.snap)return ei(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ei(Xn(e.path,n),t))return!0;return!1}function Is(e){return e.visible}function ks(e,t,n){let i=us.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)ei(n,e)?(t=Jn(n,e),i=ds(i,t,r.snap)):ei(e,n)&&(t=Jn(e,n),i=ds(i,Bn(),r.snap.getChild(t)));else{if(!r.children)throw ue("WriteRecord should have .snap or .children");if(ei(n,e))t=Jn(n,e),i=ps(i,t,r.children);else if(ei(e,n))if(t=Jn(e,n),Qn(t))i=ps(i,Bn(),r.children);else{const e=Ue(r.children,$n(t));if(e){const n=e.getChild(Vn(t));i=ds(i,Bn(),n)}}}}}return i}function Ts(e,t,n,i,s){if(i||s){const r=ys(e.visibleWrites,t);if(!s&&vs(r))return n;if(s||null!=n||fs(r,Bn())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(ei(e.path,t)||ei(t,e.path))};return bs(ks(e.allWrites,r,t),n||Di.EMPTY_NODE)}return null}{const i=ms(e.visibleWrites,t);if(null!=i)return i;{const i=ys(e.visibleWrites,t);if(vs(i))return n;if(null!=n||fs(i,Bn())){return bs(i,n||Di.EMPTY_NODE)}return null}}}function Ns(e,t,n,i){return Ts(e.writeTree,e.treePath,t,n,i)}function Rs(e,t){return function(e,t,n){let i=Di.EMPTY_NODE;const s=ms(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ei,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=ys(e.visibleWrites,t);return n.forEachChild(Ei,((e,t)=>{const n=bs(ys(s,new jn(e)),t);i=i.updateImmediateChild(e,n)})),gs(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return gs(ys(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Ps(e,t,n,i){return function(e,t,n,i,s){he(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Xn(t,n);if(fs(e.visibleWrites,r))return null;{const t=ys(e.visibleWrites,r);return vs(t)?s.getChild(n):bs(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Ds(e,t){return function(e,t){return ms(e.visibleWrites,t)}(e.writeTree,Xn(e.treePath,t))}function xs(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=ys(e.visibleWrites,t),c=ms(l,Bn());if(null!=c)a=c;else{if(null==n)return[];a=bs(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function As(e,t,n){return function(e,t,n,i){const s=Xn(t,n),r=ms(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return bs(ys(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ls(e,t){return Ms(Xn(e.treePath,t),e.writeTree)}function Ms(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{trackChildChange(e){const t=e.type,n=e.childName;he("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),he(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Ui(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,qi(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Fi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw ue("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ui(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class qs{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ns(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return As(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ls(this.viewCache_),s=xs(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e,t,n,i,s){const r=new Os;let o,a;if(n.type===Xi.OVERWRITE){const l=n;l.source.fromUser?o=js(e,t,l.path,l.snap,i,s,r):(he(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Qn(l.path),o=Ws(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Xi.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Xn(n,i);Bs(t,$n(c))&&(a=js(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Xn(n,i);Bs(t,$n(c))||(a=js(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(he(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=zs(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Xi.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Ds(i,n))return t;{const a=new qs(i,t,s),l=t.eventCache.getNode();let c;if(Qn(n)||".priority"===$n(n)){let n;if(t.serverCache.isFullyInitialized())n=Ns(i,ls(t));else{const e=t.serverCache.getNode();he(e instanceof Di,"serverChildren would be complete if leaf node"),n=Rs(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=$n(n);let h=As(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Vn(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Di.EMPTY_NODE,Vn(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ns(i,ls(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Ds(i,Bn()),rs(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Ds(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Qn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ws(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Qn(n)){let i=new hs(null);return l.getNode().forEachChild(hi,((e,t)=>{i=i.set(new jn(e),t)})),zs(e,t,n,i,s,r,a,o)}return t}{let c=new hs(null);return i.foreach(((e,t)=>{const i=Xn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),zs(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Xi.LISTEN_COMPLETE)throw ue("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=os(t,r.getNode(),r.isFullyInitialized()||Qn(n),r.isFiltered());return Hs(e,o,n,i,Fs,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=as(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Oi(as(t)))}}(t,o,l),{viewCache:o,changes:l}}function Hs(e,t,n,i,s,r){const o=t.eventCache;if(null!=Ds(i,n))return t;{let a,l;if(Qn(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ls(t),s=Rs(i,n instanceof Di?n:Di.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Ns(i,ls(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=$n(n);if(".priority"===c){he(1===zn(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Ps(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Vn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Ps(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=As(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return rs(t,a,o.isFullyInitialized()||Qn(n),e.filter.filtersNodes())}}function Ws(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Qn(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=$n(n);if(!l.isCompleteForPath(n)&&zn(n)>1)return t;const s=Vn(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Fs,null)}const u=os(t,c,l.isFullyInitialized()||Qn(n),h.filtersNodes());return Hs(e,u,n,s,new qs(s,u,r),a)}function js(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new qs(s,t,r);if(Qn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=rs(t,c,!0,e.filter.filtersNodes());else{const s=$n(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=rs(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Vn(n),c=a.getNode().getImmediateChild(s);let u;if(Qn(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Kn(r)&&e.getChild(Yn(r)).isEmpty()?e:e.updateChild(r,i):Di.EMPTY_NODE}if(c.equals(u))l=t;else{l=rs(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Bs(e,t){return e.eventCache.isCompleteForChild(t)}function $s(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function zs(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Qn(n)?i:new hs(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=$s(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ws(e,c,new jn(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=$s(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ws(e,c,new jn(n),l,s,r,o,a)}})),c}function Vs(e,t){const n=ls(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Qn(t)&&!n.getImmediateChild($n(t)).isEmpty())?n.getChild(t):null}function Ks(e,t,n,i){t.type===Xi.MERGE&&null!==t.source.queryId&&(he(ls(e.viewCache_),"We should always have a full cache before handling merges"),he(as(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Us(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,he(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),he(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),he(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Gs(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Gs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),is(e,s,"child_removed",t,i,n),is(e,s,"child_added",t,i,n),is(e,s,"child_moved",r,i,n),is(e,s,"child_changed",t,i,n),is(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys,Xs;function Qs(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return he(null!=r,"SyncTree gave us an op for an invalid query."),Ks(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Ks(r,t,n,i));return s}}function Js(e,t){let n=null;for(const i of e.views.values())n=n||Vs(i,t);return n}class Zs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new hs(null),this.pendingWriteTree_={visibleWrites:us.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function er(e,t,n,i,s){return function(e,t,n,i,s){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=ds(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?rr(e,new es({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function tr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Es(e.pendingWriteTree_,t)){let t=new hs(null);return null!=i.snap?t=t.set(Bn(),!0):mn(i.children,(e=>{t=t.set(new jn(e),!0)})),rr(e,new Zi(i.path,t,n))}return[]}function nr(e,t,n){return rr(e,new es({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ir(e,t,n,i){const s=lr(e,i);if(null!=s){const i=cr(s),r=i.path,o=i.queryId,a=Jn(r,t);return hr(e,r,new es(Ji(o),a,n))}return[]}function sr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Js(n,Jn(e,t));if(i)return i}));return Ts(i,t,s,n,!0)}function rr(e,t){return or(t,e.syncPointTree_,null,Cs(e.pendingWriteTree_,Bn()))}function or(e,t,n,i){if(Qn(e.path))return ar(e,t,n,i);{const s=t.get(Bn());null==n&&null!=s&&(n=Js(s,Bn()));let r=[];const o=$n(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ls(i,o);r=r.concat(or(a,l,e,t))}return s&&(r=r.concat(Qs(s,e,i,n))),r}}function ar(e,t,n,i){const s=t.get(Bn());null==n&&null!=s&&(n=Js(s,Bn()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Ls(i,t),l=e.operationForChild(t);l&&(r=r.concat(ar(l,s,o,a)))})),s&&(r=r.concat(Qs(s,e,i,n))),r}function lr(e,t){return e.tagToQueryMap.get(t)}function cr(e){const t=e.indexOf("$");return he(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new jn(e.substr(0,t))}}function hr(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");return Qs(i,n,Cs(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ur(t)}node(){return this.node_}constructor(e){this.node_=e}}class dr{getImmediateChild(e){const t=Xn(this.path_,e);return new dr(this.syncTree_,t)}node(){return sr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const pr=function(e,t,n){return e&&"object"==typeof e?(he(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?_r(e[".sv"],t,n):"object"==typeof e[".sv"]?fr(e[".sv"],t):void he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_r=function(e,t,n){if("timestamp"===e)return n.timestamp;he(!1,"Unexpected server value: "+e)},fr=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&he(!1,"Unexpected increment value: "+i);const s=t.node();if(he(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},mr=function(e,t,n,i){return yr(t,new dr(n,e),i)},gr=function(e,t,n){return yr(e,new ur(t),n)};function yr(e,t,n){const i=e.getPriority().val(),s=pr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=pr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ci(r,Ai(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ci(s))),i.forEachChild(Ei,((e,i)=>{const s=yr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function br(e,t){let n=t instanceof jn?t:new jn(t),i=e,s=$n(n);for(;null!==s;){const e=Ue(i.node.children,s)||{children:{},childCount:0};i=new vr(s,i,e),n=Vn(n),s=$n(n)}return i}function wr(e){return e.node.value}function Cr(e,t){e.node.value=t,Tr(e)}function Er(e){return e.node.childCount>0}function Sr(e,t){mn(e.node.children,((n,i)=>{t(new vr(n,e,i))}))}function Ir(e,t,n,i){n&&!i&&t(e),Sr(e,(e=>{Ir(e,t,!0,i)})),n&&i&&t(e)}function kr(e){return new jn(null===e.parent?e.name:kr(e.parent)+"/"+e.name)}function Tr(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===wr(e)&&!Er(e)}(n),s=qe(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Tr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Tr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Nr=/[\[\].#$\/\u0000-\u001F\u007F]/,Rr=/[\[\].#$\u0000-\u001F\u007F]/,Pr=function(e){return"string"==typeof e&&0!==e.length&&!Nr.test(e)},Dr=function(e){return"string"==typeof e&&0!==e.length&&!Rr.test(e)},xr=function(e,t,n){const i=n instanceof jn?new ti(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ii(i));if("function"==typeof t)throw new Error(e+"contains a function "+ii(i)+" with contents = "+t.toString());if(hn(t))throw new Error(e+"contains "+t.toString()+" "+ii(i));if("string"==typeof t&&t.length>10485760/3&&Ge(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+ii(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(mn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Pr(t)))throw new Error(e+" contains an invalid key ("+t+") "+ii(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ge(a),ni(o),xr(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ge(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+ii(i)+" in addition to actual children.")}},Ar=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Pr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Dr(e)}(n))throw new Error(Ve(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Zn(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Or(e,t,n){Mr(e,n),Fr(e,(e=>ei(e,t)||ei(t,e)))}function Fr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(qr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function qr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();tn&&rn("event: "+n.toString()),bn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zi(),this.transactionQueueTree_=new vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Hr(e,t,n){if(e.stats_=Dn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Bi(e.repoInfo_,((t,n,i,s)=>{Br(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>$r(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ri(e.repoInfo_,t,((t,n,i,s)=>{Br(e,t,n,i,s)}),(t=>{$r(e,t)}),(t=>{!function(e,t){mn(t,((t,n)=>{zr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Pn[n]||(Pn[n]=t()),Pn[n]}(e.repoInfo_,(()=>new Yi(e.stats_,e.server_))),e.infoData_=new $i,e.infoSyncTree_=new Zs({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=nr(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),zr(e,"connected",!1),e.serverSyncTree_=new Zs({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Or(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Wr(e){const t=e.infoData_.getNode(new jn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function jr(e){return(t=(t={timestamp:Wr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Br(e,t,n,i,s){e.dataUpdateCount++;const r=new jn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=We(n,(e=>Ai(e)));o=function(e,t,n,i){const s=lr(e,i);if(s){const i=cr(s),r=i.path,o=i.queryId,a=Jn(r,t),l=hs.fromObject(n);return hr(e,r,new ts(Ji(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Ai(n);o=ir(e.serverSyncTree_,r,t,s)}else if(i){const t=We(n,(e=>Ai(e)));o=function(e,t,n){const i=hs.fromObject(n);return rr(e,new ts({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Ai(n);o=nr(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Qr(e,r)),Or(e.eventQueue_,a,o)}function $r(e,t){zr(e,"connected",t),!1===t&&function(e){Gr(e,"onDisconnectEvents");const t=jr(e),n=zi();Ki(e.onDisconnect_,Bn(),((i,s)=>{const r=mr(i,s,e.serverSyncTree_,t);Vi(n,i,r)}));let i=[];Ki(n,Bn(),((t,n)=>{i=i.concat(nr(e.serverSyncTree_,t,n));const s=no(e,t);Qr(e,s)})),e.onDisconnect_=zi(),Or(e.eventQueue_,Bn(),i)}(e)}function zr(e,t,n){const i=new jn("/.info/"+t),s=Ai(n);e.infoData_.updateSnapshot(i,s);const r=nr(e.infoSyncTree_,i,s);Or(e.eventQueue_,i,r)}function Vr(e){return e.nextWriteId_++}function Kr(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Gr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),rn(n,...t)}function Yr(e,t,n){return sr(e.serverSyncTree_,t,n)||Di.EMPTY_NODE}function Xr(e,t=e.transactionQueueTree_){if(t||to(e,t),wr(t)){const n=Zr(e,t);he(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Yr(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];he(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Jn(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Gr(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(tr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();to(e,br(e.transactionQueueTree_,t)),Xr(e,e.transactionQueueTree_),Or(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)bn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{cn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Qr(e,t)}}),o)}(e,kr(t),n)}else Er(t)&&Sr(t,(t=>{Xr(e,t)}))}function Qr(e,t){const n=Jr(e,t),i=kr(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Jn(n,l.path);let h,u=!1;if(he(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(tr(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",s=s.concat(tr(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Yr(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){xr("transaction failed: Data returned ",i,l.path);let t=Ai(i);"object"==typeof i&&null!=i&&qe(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=jr(e),c=gr(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Vr(e),r.splice(r.indexOf(o),1),s=s.concat(er(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(tr(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",s=s.concat(tr(e.serverSyncTree_,l.currentWriteId,!0))}Or(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;to(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)bn(i[e]);Xr(e,e.transactionQueueTree_)}(e,Zr(e,n),i),i}function Jr(e,t){let n,i=e.transactionQueueTree_;for(n=$n(t);null!==n&&void 0===wr(i);)i=br(i,n),n=$n(t=Vn(t));return i}function Zr(e,t){const n=[];return eo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function eo(e,t,n){const i=wr(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Sr(t,(t=>{eo(e,t,n)}))}function to(e,t){const n=wr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Cr(t,n.length>0?n:void 0)}Sr(t,(t=>{to(e,t)}))}function no(e,t){const n=kr(Jr(e,t)),i=br(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{io(e,t)})),io(e,i),Ir(i,(t=>{io(e,t)})),n}function io(e,t){const n=wr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(he(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(he(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(tr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Cr(t,void 0):n.length=r+1,Or(e.eventQueue_,kr(t),s);for(let e=0;e<i.length;e++)bn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(e,t){const n=ro(e),i=n.namespace;"firebase.com"===n.domain&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new kn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new jn(n.pathString)}},ro=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):cn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo{get key(){return Qn(this._path)?null:Kn(this._path)}get ref(){return new ao(this._repo,this._path)}get _queryIdentifier(){const e=ji(this._queryParams),t=_n(e);return"{}"===t?"default":t}get _queryObject(){return ji(this._queryParams)}isEqual(e){if(!((e=Ye(e))instanceof oo))return!1;const t=this._repo===e._repo,n=Zn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class ao extends oo{get parent(){const e=Yn(this._path);return null===e?null:new ao(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Hi,!1)}}!function(e){he(!Ys,"__referenceConstructor has already been defined"),Ys=e}(ao),function(e){he(!Xs,"__referenceConstructor has already been defined"),Xs=e}(ao);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lo={};let co=!1;function ho(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=so(r,s),c=l.repoInfo;void 0!==V&&V.env&&(a=V.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=so(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const h=s&&o?new Sn(Sn.OWNER):new En(e.name,e.options,t);Ar("Invalid Firebase Database URL",l),Qn(l.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=lo[t.name];s||(s={},lo[t.name]=s);let r=s[e.toURLString()];r&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Ur(e,co,n,i),s[e.toURLString()]=r,r}(c,e,h,new Cn(e.name,n));return new uo(u,e)}class uo{get _repo(){return this._instanceStarted||(Hr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ao(this._repo,Bn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=lo[t];n&&n[e.key]===e||ln(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Kr(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ln("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}ri.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ri.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){zt="9.23.0",Pt(new Xe("database",((e,{instanceIdentifier:t})=>ho(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Mt("@firebase/database","0.14.4",e),Mt("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),console.log((function(e=Lt(),t){const n=Dt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Ce("database");e&&function(e,t,n,i={}){(e=Ye(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Sn(Sn.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Ie(i.mockUserToken,e.app.options.projectId);r=new Sn(t)}!function(e,t,n,i){e.repoInfo_=new kn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}));function po(e){document.querySelector(".modal-form-auth").style.display="none"}function _o(e){e.preventDefault();!function(e,t){fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e)}))}(document.getElementById("email").value,document.getElementById("password").value)}document.querySelector(".user-btn").addEventListener("click",(function(){const e=document.querySelector(".modal-form-auth");e.style.display="block",e.innerHTML='\n    <div class="modal-body-auth">\n      <div class="modal-content-auth">\n        <form class="form" id="auth-form">\n          <h2 class="title-auth">Authentication</h2>\n          <div class="form-group">\n            <input class="input-auth" type="email" id="email"  required>\n            <label class="form-text-auth" for="email">Email</label>\n          </div>\n          <div class="form-group">\n            <input class="input-auth" type="password" id="password" name="password" required>\n            <label class="form-text-auth" for="password">Пароль</label>\n          </div>\n          <button type="submit" class="submit-btn">Войти</button>\n          <button class="close-button-auth">Закрыть</button>\n        </form>\n      </div>\n    </div>\n  ',document.getElementById("auth-form").addEventListener("submit",_o,{once:!0}),document.querySelector(".close-button-auth").addEventListener("click",po)}));
//# sourceMappingURL=index.5bf1775d.js.map
