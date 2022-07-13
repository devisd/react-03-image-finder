// function searchApi(query, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(
//         new Error('Нет искомой темы. Попробуйте ввести другую тему для поиска')
//       );
//     })
//     .then(data => {
//       return data.hits;
//     });
// }

// const api = {
//   searchApi,
// };

// export default api;

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '28430104-64039a230ce7799bb0faf758d';

const fetchImg = ({ searchQuery, currentPage = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => res.data.hits);
};

export default fetchImg;
