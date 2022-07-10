// import React from 'react';

function searchApi({ searchQuery, page }) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
  );
}

export default searchApi;
