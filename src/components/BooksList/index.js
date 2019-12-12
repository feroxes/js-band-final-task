import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import BookCard from './BookCard';

import { saveBooksList } from '../../actions/books';
import { priceFilter } from '../Menu/priceFilter';

class BooksList extends Component {
  async componentDidMount() {
    const { onSaveBooksList } = this.props;
    try {
      const booksLists = await axios.get('books');
      onSaveBooksList(booksLists.data);
    } catch (e) {
      console.error(`${e.name}: ${e.message}`);
    }
  }

  makeSearch = list => {
    const { filters } = this.props;
    const { search } = filters;
    return list.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
  };

  makeFilter = list => {
    const { filters } = this.props;
    const { price } = filters;
    if (price.toLowerCase() === 'all') return list;
    const filterParams = priceFilter.find(item => item.name === price);
    return list.filter(book => book.price >= filterParams.from && book.price <= filterParams.to);
  };

  makeBooksList = () => {
    const { booksList, filters } = this.props;
    const { search, price } = filters;
    let result = booksList;
    if (search) result = this.makeSearch(result);
    if (price) result = this.makeFilter(result);
    return result;
  };

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.makeBooksList().map(book => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    );
  }
}

BooksList.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
  onSaveBooksList: PropTypes.func.isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  booksList: state.books.booksList,
  filters: state.books.filters,
});

const mapDispatchToProps = dispatch => ({
  onSaveBooksList: data => dispatch(saveBooksList(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
