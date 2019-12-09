import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import BookCard from './BookCard';

import { saveBooksList } from '../../actions/books';

class BooksList extends Component {
  async componentDidMount() {
    const { onSaveBooksList } = this.props;
    const booksLists = await axios.get('books');
    onSaveBooksList(booksLists.data);
  }

  makeSearch = list => {
    const { filters } = this.props;
    const { search } = filters;
    return list.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
  };

  makeBooksList = () => {
    const { booksList, filters } = this.props;
    const { search } = filters;
    let result = booksList;
    if (search) result = this.makeSearch(result);
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
