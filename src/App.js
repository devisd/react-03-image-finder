import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from 'components/Modal';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    query: '',
    showModal: false,
  };

  // static propTypes = {
  //   images: PropTypes.string.isRequired,
  //   query: PropTypes.string.isRequired,
  //   page: PropTypes.number.isRequired,
  //   loading: PropTypes.bool,
  // };

  formSubmitHandler = data => {
    const searchQuery = data.toLowerCase();

    if (searchQuery.trim() === '') {
      return toast.error('Введите название для поиска');
    }

    this.setState({
      query: searchQuery,
    });
  };

  render() {
    const { query, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery query={query} />
        {showModal && <Modal />}
        <ToastContainer autoClose={2500} theme="dark" />
      </div>
    );
  }
}

export default App;
