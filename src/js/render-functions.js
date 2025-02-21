// відбраження елементів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function createHTML(data) {
  const refs = {
    list: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
  };

  function imageTemplate(item) {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
    return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${likes}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${views}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${comments}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${downloads}</span>
            </div>
          </div>
          </li>
`;
  }

  function imagesTemplate(items) {
    return items.map(imageTemplate).join('');
  }

  const markup = imagesTemplate(data);
  refs.list.insertAdjacentHTML('afterbegin', markup);

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    animationSpeed: 250,
  });
  lightbox.refresh();
  refs.loader.classList.add('hidden');
}
