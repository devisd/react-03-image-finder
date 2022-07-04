import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    images: null,
    query: '',
    loading: false,
  };

  formSubmitHandler = data => {
    const searchQuery = data.toLowerCase();

    if (searchQuery.trim() === '') {
      return toast.error('Введите название для поиска');
    }
    this.setState({
      query: searchQuery,
      loading: true,
    });
    setInterval(
      () =>
        fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=1&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(data => this.setState({ images: data.hits }))
          .finally(this.setState({ loading: false })),
      3000
    );
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {this.state.images && <ImageGallery data={this.state.images} />}

        {this.state.images && <Button />}

        {this.state.loading && <Loader />}
        <ToastContainer autoClose={2500} theme="dark" />
      </div>
    );
  }
}
export default App;
