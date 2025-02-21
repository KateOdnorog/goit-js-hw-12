// HTTP запити

import axios from 'axios';

export default function findImages(searchText) {
  const options = {
    params: {
      key: '48902989-5d77fe06f72350c30855133ec',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
