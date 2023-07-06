// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   connectAuthEmulator,
//   signInWithEmailAndPassword,
//   AuthErrorCodes,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBJxM0QaklTSE-TkJnEoE7MpdsduKlooE0',
//   authDomain: 'bookshop-500.firebaseapp.com',
//   projectId: 'bookshop-500',
//   storageBucket: 'bookshop-500.appspot.com',
//   messagingSenderId: '101931220235',
//   appId: '1:101931220235:web:b46782386513f87faa360e',
//   measurementId: 'G-G1XWB30RZX',
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// // createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// connectAuthEmulator(auth, 'http://localhost:9099');

// const loginEmailPass = async e => {
//   e.preventDefault();
//   const emailVal = login.value;
//   const passVal = pass.value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       emailVal,
//       passVal
//     );
//   } catch (error) {
//     console.log('error', error);
//     showLoginError(error);
//   }
// };

// const divLoginError = document.querySelector('.login_error');
// const btnLogin = document.querySelector('.btn_login');
// const pass = document.querySelector("[name='password']");
// const login = document.querySelector("[name='email']");
// const ligin_name = document.querySelector("[name='name']");
// const loginMessageError = document.querySelector('.login_error');
// const logOut = document.querySelector('.btn_logout');

// btnLogin.addEventListener('click', loginEmailPass);

// const hideLoginError = () => {
//   divLoginError.style.display = 'none';
//   loginMessageError.innerHTML = '';
// };

// const showLoginError = error => {
//   divLoginError.style.display = 'block';
//   if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
//     loginMessageError.innerHTML = 'wrong password';
//   } else {
//     loginMessageError.innerHTML = `Error: ${error.message}`;
//   }
// };

// const showLoginState = user => {
//   // lblAuthState.innerHTML = `You're logged in as ${user.displayName} ( uid: ${user.uid}, email: ${user.email})`
// };

// hideLoginError();

// const createAccount = async e => {
//   const emailValue = login.value;
//   const passValue = pass.value;

//   try {
//     e.preventDefault();
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       emailValue,
//       passValue
//     );
//     console.log('first', userCredential.user);
//   } catch (error) {
//     console.log('error', error);
//     showLoginError(error);
//   }
// };

// btnLogin.addEventListener('click', createAccount);

// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log('user', user);
//       // showApp()
//       showLoginState(user);
//       hideLoginError();
//     } else {
//       showLoginForm();
//       lblAuthState.innerHTML = `You're not logged in`;
//     }
//   });
// };

// // monitorAuthState()
// // const logout = async () => {
// //     await signOut(auth)
// // }
// // logOut.addEventListener('click', logout)
