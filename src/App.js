import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import Button from 'components/Button';

// import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.css';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    images: null,
    query: '',
  };

  formSubmitHandler = data => {
    const searchQuery = data.toLowerCase();

    if (searchQuery.trim() === '') {
      return toast.error('Введите название для поиска');
    }
    this.setState({ query: searchQuery });
    fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => this.setState({ images: data.hits }));
  };

  //   searchImages() {
  //     const searchQuery = this.state.query

  // // В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.
  // // id - уникальный идентификатор
  // // webformatURL - ссылка на маленькое изображение для списка карточек
  // // largeImageURL - ссылка на большое изображение для модального окна
  //   }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {this.state.images && <ImageGallery data={this.state.images} />}

        {/* <Button /> */}
        {/* <Audio height="100" width="100" color="grey" ariaLabel="loading" /> */}
        <ToastContainer autoClose={2500} theme="dark" />
      </div>
    );
  }
}
export default App;
