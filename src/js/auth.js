import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from 'firebase/database';

// const API_KEY = 'AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc';

// firebaseConfig = {
//   databaseURL: `gs://books-project-c0eb5.appspot.com`,
// };

// const app = initializeApp(firebaseConfig);

// // const database = getDatabase(app);

// function writeUserData(userId, name, email) {
//   const db = getDatabase(app);
//   console.log(db);

//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

writeUserData(
  'DKt5yaLfQNTI9LVZtnLPhYqLJk63',
  'ilya',
  'tkachenkoilya07@icloud.com'
);

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
      <div class="modal-content-auth">
        <form class="form" id="auth-form">
          <h2 class="title-auth">Authentication</h2>
          <div class="form-group">
            <input class="input-auth" type="email" id="email"  required>
            <label class="form-text-auth" for="email">Email</label>
          </div>
          <div class="form-group">
            <input class="input-auth" type="password" id="password" name="password" required>
            <label class="form-text-auth" for="password">Пароль</label>
          </div>
          <button type="submit" class="submit-btn">Войти</button>
          <button class="close-button-auth">Закрыть</button>
        </form>
      </div>
    </div>
  `;
}

function authWithEmailAmdPassword(email, password) {
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
