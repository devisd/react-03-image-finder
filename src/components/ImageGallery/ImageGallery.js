import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ data }) => {
  return (
    <div>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem data={data} />
      </ul>
    </div>
  );
};

export default ImageGallery;
