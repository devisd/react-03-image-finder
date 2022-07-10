import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({
        loading: true,
      });
      // setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=1&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            images: data.hits,
          });
        })
        .finally(() => this.setState({ loading: false }));
      // }, 3000);
    }
  }

  onLoadMore = page => {
    this.setState({
      page,
    });
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <ul className={css.ImageGallery}>
          {images && <ImageGalleryItem data={images} />}
        </ul>
        {loading && <Loader />}

        {images && <Button onClick={this.onLoadMore} />}
      </div>
    );
  }
}
