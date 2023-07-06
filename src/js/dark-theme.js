document.addEventListener('DOMContentLoaded', () => {
  const switchInput = document.querySelector('.switch input');
  switchInput.checked = localStorage.getItem('theme') === 'dark';

  document.querySelector('.switch').addEventListener('click', event => {
    const theme = switchInput.checked ? 'dark' : '';
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }

    addDarkClassToHTML();
  });

  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('body').classList.toggle('dark-theme');
      } else {
        document.querySelector('body').classList.remove('dark-theme');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function updateSliderClass() {
    const slider = document.querySelector('.slider');
    if (localStorage.getItem('theme') === 'dark') {
      slider.classList.add('dark-theme');
    } else {
      slider.classList.remove('dark-theme');
    }
  }

  addDarkClassToHTML();
  updateSliderClass();
});

//for modal heart
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

// openModal.addEventListener('click', () => {
//   modal.show();
//   listEl.classList.add('span-heart01');
//   document.body.classList.add('modal-open');
// });

// closeModal.addEventListener('click', () => {
//   modal.close();
//   document.body.classList.remove('modal-open');
// });
