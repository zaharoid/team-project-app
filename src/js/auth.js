
const openBtn = document.querySelector('.open');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal)

function openModal() {
    modal.style.display = 'block';
  modal.innerHTML = getAuthForm();
  document.getElementById('auth-form').addEventListener('submit', authFormHandler, { once: true });
}

function authFormHandler(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  authWithEmailAmdPassword(email,password)
  
}

function getAuthForm() {
    return  `
    <form class="form" id="auth-form">
     <h2>Authentication</h2>
      <div class="form-group">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="password" required>
        <label for="password">Пароль</label>
      </div>
      <button type="submit" class="submit-btn">Войти</button>
    </form>
    <button class="close-button">Закрыть</button>
  `
}

function authWithEmailAmdPassword(email, password) {
  const API_KEY = "AIzaSyDxNwmZzHZ-vdGILRkmWY0qu02lzG2Ospc";
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(data => {
     data
    }
    )
  
}