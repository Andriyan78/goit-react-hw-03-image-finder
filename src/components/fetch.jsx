import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32999305-dd322609f910976659da09787';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};