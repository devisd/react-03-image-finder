import React, { Component } from 'react';
import imagesAPI from '../services/search-api';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Error from 'components/Error';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: 'idle',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({
        status: 'pending',
      });
      imagesAPI
        .searchApi(nextQuery, nextPage)
        .then(data => {
          this.setState({
            images: data.hits,
            status: 'resolved',
          });
        })
        .catch(error =>
          this.setState({
            error,
            status: 'rejected',
          })
        );
    }
  }

  onLoadMore = page => {
    this.setState(prevState => {
      return {
        [page]: prevState.page + 1,
      };
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return (
        <h2 className={css.ImageGallery__title_text}>
          Введите тему изображений для поиска
        </h2>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Error message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul className={css.ImageGallery}>
            <ImageGalleryItem data={images} />
            {/* <Modal /> */}
          </ul>
          <Button onClick={this.onLoadMore} />
        </div>
      );
    }

    // return (
    //   <div>
    //     {error && (
    //       <div>
    //         <img
    //           className={css.ImageGallery__error}
    //           src="http://risovach.ru/upload/2017/12/mem/vse-propalo_164789489_orig_.jpg"
    //           alt="всё пропало"
    //         />
    //         <h2 className={css.ImageGallery__error_text}>{error.message}</h2>
    //       </div>
    //     )}
    //     <ul className={css.ImageGallery}>
    //       {images && <ImageGalleryItem data={images} />}
    //     </ul>
    //     {loading && <Loader />}
    //   </div>
    // );
  }
}
