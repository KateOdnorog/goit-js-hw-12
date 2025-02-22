import findImages from './js/pixabay-api.js';
import createHTML from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  input: document.querySelector('.input-field'),
  loader: document.querySelector('.loader'),
  btnLoad: document.querySelector('.btn-load'),
  gallery: document.querySelector('.gallery'),
  loaderBtn: document.querySelector('.loader2'),
};

const params = {
  query: null,
  page: null,
  total: null,
  perPage: 40,
};

// ==============================================

refs.form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  params.query = refs.input.value.trim();
  params.page = 1;

  if (params.query === '') {
    iziToast.warning({
      position: 'topRight',
      title: 'WARN',
      message: 'You have not specified any search parameters.',
    });
  }

  clear();
  hideBtnLoad();
  showLoader();

  try {
    const result = await findImages(params.query, params.page, params.perPage);
    if (result.data.hits.length === 0) {
      clear();
      hideLoader();

      iziToast.error({
        title: 'ERROR',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }
    createHTML(result.data.hits);
    params.total = result.data.totalHits;
    checkBtnStatus();
  } catch {
    clear();
    hideLoader();

    iziToast.error({
      title: 'ERROR',
      message: `Error fetching images: ${error}`,
      position: 'topRight',
    });
  }

  hideLoader();
  e.target.reset();
}

// ==============================================
refs.btnLoad.addEventListener('input', inputLoad);

async function inputLoad(e) {
  params.page += 1;

  showLoaderBtn();
  checkBtnStatus();

  const result = await findImages(params.query, params.page, params.perPage);
  createHTML(result.data.hits);

  removeLoaderBtn();

  scrollPage();
}
// ==============================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function clear() {
  refs.gallery.innerHTML = '';
}

function showBtnLoad() {
  refs.btnLoad.disabled = false;
}

function hideBtnLoad() {
  refs.btnLoad.disabled = true;
}

function checkBtnStatus() {
  const perPage = 40;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideBtnLoad();

    iziToast.info({
      position: 'topRight',
      title: 'INFO',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  } else {
    showBtnLoad();
  }
}

function showLoaderBtn() {
  refs.loaderBtn.classList.remove('hidden');
}

function removeLoaderBtn() {
  refs.loaderBtn.classList.add('hidden');
}

function scrollPage() {
  const info = refs.gallery.firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}
