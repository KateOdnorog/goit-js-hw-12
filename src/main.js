import findImages from './js/pixabay-api.js';
import createHTML from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  input: document.querySelector('.input-field'),
  loaderImage: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.btn-load'),
  gallery: document.querySelector('.gallery'),
  loaderBtn: document.querySelector('.loader2'),
};

const params = {
  query: null,
  page: 1,
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
    console.log(checkBtnStatus);
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
refs.btnLoadMore.addEventListener('click', inputLoad);

async function inputLoad() {
  params.page += 1;
  showLoader();

  const result = await findImages(params.query, params.page);
  createHTML(result.data.hits);

  checkBtnStatus();
  hideLoader();

  scrollPage();
}
// ==============================================

function showLoader() {
  refs.loaderImage.classList.remove('hidden');
}

function hideLoader() {
  refs.loaderImage.classList.add('hidden');
}

function clear() {
  refs.gallery.innerHTML = '';
}

// ==============================================

function showBtnLoadMore() {
  refs.btnLoadMore.classList.remove('hidden');
  refs.loaderBtn.classList.add('hidden');
}

function hideBtnLoadMore() {
  refs.btnLoadMore.classList.add('hidden');
  refs.loaderBtn.classList.remove('hidden');
}

function checkBtnStatus() {
  const perPage = params.perPage;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideBtnLoadMore();

    iziToast.info({
      position: 'topRight',
      title: 'INFO',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  } else {
    showBtnLoadMore();
  }
}
// ==============================================

function scrollPage() {
  const info = refs.gallery.lastElementChild.getBoundingClientRect();
  const height = info.height + 100;
  scrollBy({
    behavior: 'smooth',
    top: height * 3,
  });
}
