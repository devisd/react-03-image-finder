import React from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';

import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import PropTypes from 'prop-types';

function App() {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 50,
      }}
    >
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default App;
