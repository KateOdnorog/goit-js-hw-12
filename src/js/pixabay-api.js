// HTTP запити

import axios from 'axios';

const API_KEY = '48902989-5d77fe06f72350c30855133ec';

export default async function findImages(query, page, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    pageSize: perPage,
    page: page,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return await axios.get(BASE_URL, { params });
}
