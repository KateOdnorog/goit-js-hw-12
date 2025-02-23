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
    return iziToast.warning({
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
      return iziToast.error({
        title: 'ERROR',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }

    createHTML(result.data.hits);
    params.total = result.data.totalHits;
    checkBtnStatus();
  } catch (error) {
    clear();
    hideLoader();

    return iziToast.error({
      title: 'ERROR',
      message: `Error fetching images: ${error}`,
      position: 'topRight',
    });
  }

  hideLoader();
  e.target.reset();
}

// ==============================================
refs.btnLoadMore.addEventListener('click', LoadBtn);

async function LoadBtn() {
  params.page += 1;
  showLoaderBtn();
  checkBtnStatus();

  try {
    const result = await findImages(params.query, params.page, params.perPage);
    createHTML(result.data.hits);
    scrollPage();
  } catch {
    hideLoaderBtn();
    return iziToast.error({
      title: 'ERROR',
      message: `Failed to load more images! ${error}`,
      position: 'topRight',
    });
  }

  hideLoaderBtn();
}
// ==============================================

function showLoader() {
  refs.loaderImage.classList.remove('visually-hidden');
}

function hideLoader() {
  refs.loaderImage.classList.add('visually-hidden');
}

function clear() {
  refs.gallery.innerHTML = '';
}

// ==============================================

function showBtnLoadMore() {
  refs.btnLoadMore.classList.remove('visually-hidden');
}

function hideBtnLoadMore() {
  refs.btnLoadMore.classList.add('visually-hidden');
}

function checkBtnStatus() {
  const maxPage = Math.ceil(params.total / params.perPage);

  if (params.page >= maxPage) {
    hideBtnLoadMore();

    return iziToast.info({
      position: 'topRight',
      title: 'INFO',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  } else {
    showBtnLoadMore();
  }
}
// ==============================================

function showLoaderBtn() {
  refs.loaderBtn.classList.remove('visually-hidden');
}

function hideLoaderBtn() {
  refs.loaderBtn.classList.add('visually-hidden');
}

function scrollPage() {
  const info = refs.gallery.lastElementChild.getBoundingClientRect();
  const height = info.height + 100;
  scrollBy({
    behavior: 'smooth',
    top: height * 3,
  });
}
