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

  render() {
    const { booksList } = this.props;
    console.log('----->booksList<-----', booksList);
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {booksList.map(book => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    );
  }
}

BooksList.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
  onSaveBooksList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  booksList: state.books.booksList,
});

const mapDispatchToProps = dispatch => ({
  onSaveBooksList: data => dispatch(saveBooksList(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
