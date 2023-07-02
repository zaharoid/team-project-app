document.addEventListener('DOMContentLoaded', () => {
  const switchInput = document.querySelector('.switch input');
  switchInput.checked = localStorage.getItem('theme') === 'dark';

  document.querySelector('.switch').addEventListener('click', event => {
    const theme = switchInput.checked ? 'dark' : '';
    console.log('theme', theme);

    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('p', 'color-grey'); //
    } else {
      localStorage.removeItem('theme');
      localStorage.removeItem('p', 'color-grey'); //
    }

    addDarkClassToHTML();
    updateSliderClass();
  });

  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');

        document
          .querySelector('.categories-list')
          .classList.add('categories-text-color-dark');

        const paragraphs = document.querySelectorAll('p');
        console.log('get all p', paragraphs);

        //add class 'color-grey' for all <p></p>
        paragraphs.forEach(paragraph => {
          paragraph.classList.add('color-grey');
        });
      } else {
        document.querySelector('html').classList.remove('dark');
        document
          .querySelector('.categories-list')
          .classList.remove('categories-text-color-dark');

        document
          .querySelector('.categories-list li')
          .classList.remove('color-grey');

        const paragraphs = document.querySelectorAll('p');
        console.log('all p', paragraphs);
        paragraphs.forEach(paragraph => {
          paragraph.classList.remove('color-grey');
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function updateSliderClass() {
    const slider = document.querySelector('.slider');
    if (localStorage.getItem('theme') === 'dark') {
      slider.classList.add('dark');
    } else {
      slider.classList.remove('dark');
    }
  }

  addDarkClassToHTML();
  updateSliderClass();
});
