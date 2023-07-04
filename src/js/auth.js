
 import { initializeApp } from 'firebase/app';
  import {
    getAuth,
    createUserWithEmailAndPassword,
} from 'firebase/database';
  import { getDatabase, ref, set } from 'firebase/database';


const API_KEY = 'AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc';

const firebaseConfig = {
    apiKey: 'AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc',
    authDomain: "module-2-t-all.firebaseapp.com",
    projectId: "module-2-t-all",
    storageBucket: "module-2-t-all.appspot.com",
    messagingSenderId: "105200600055",
    appId: "1:105200600055:web:fa378da333fae09f3d24f2"
  };


const app = initializeApp(firebaseConfig);



function writeUserData(userId, name, email) {
  const db = getDatabase(app);
  console.log(db);
}

// writeUserData(
//   'DKt5yaLfQNTI9LVZtnLPhYqLJk63',
//   'ilya',
//   'tkachenkoilya07@icloud.com'
// );

const openBtn = document.querySelector('.user-btn');
openBtn.addEventListener('click', openModal);

function openModal() {
  const modal = document.querySelector('.modal-form-auth');
  modal.style.display = 'block';
  modal.innerHTML = getAuthForm();
  document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, { once: true });
  document
    .querySelector('.close-button-auth')
    .addEventListener('click', closeModal);
}

function closeModal(e) {
  const modal = document.querySelector('.modal-form-auth');
  modal.style.display = 'none';
}

function authFormHandler(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  authWithEmailAmdPassword(email, password);
}

function getAuthForm() {
  return `
    <div class="modal-body-auth">
    <form class="modal-content-auth" id="auth-form">
      <div class="auth-input-form">
      <div class="form-group">
      <label>
      <input class="input-auth" type="name" id="name" placeholder="NAME" required />
      </label>
      </div>
      <div class="form-group">
      <label>
        <input class="input-auth" type="email" id="email" placeholder="EMAIL" required />
         </label>
      </div>
      <div class="form-group">
       <label>
        <input
        placeholder="PASSWORD"
          class="input-auth"
          type="password"
          id="password"
          name="password"
          required
        />
          </label>
      </div>
      <button type="submit" class="submit-btn">SIGN UP</button>
       <div class="btn-sign">
      <button class="signup-button-auth">SIGNUP</button>
      <button class="signin-button-auth">SIGNIN</button>
      <button class="close-button-auth">Закрыть</button>
      </div>
      </div>
    </form>
  </div>
  `;
}

function authWithEmailAmdPassword(email, password) {
  const API_KEY = 'AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc';
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
