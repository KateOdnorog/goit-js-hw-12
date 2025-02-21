import findImages from './js/pixabay-api.js';
import createHTML from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  input: document.querySelector('.input-field'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = refs.input.value.trim();

  if (searchText === '') {
    iziToast.warning({
      position: 'topRight',
      title: 'WARN',
      message: 'You have not specified any search parameters.',
    });
  }

  clear();
  removeLoader();

  findImages(searchText)
    .then(data => {
      if (data.data.hits.length === 0) {
        clear();
        showLoader();
        iziToast.error({
          title: 'ERROR',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      }

      createHTML(data.data.hits);
    })
    .catch(error => {
      clear();
      showLoader();
      iziToast.error({
        title: 'ERROR',
        message: `Error fetching images: ${error}`,
        position: 'topRight',
      });
    });

  showLoader();

  e.target.reset();
}

// ------------------------

function showLoader() {
  refs.loader.classList.add('hidden');
}

function removeLoader() {
  refs.loader.classList.remove('hidden');
}

function clear() {
  refs.gallery.innerHTML = '';
}
