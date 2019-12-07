import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import BookCard from './BookCard';

import { saveBooksList } from '../../actions/books';

class BookList extends Component {
  async componentDidMount() {
    const { onSaveBooksList } = this.props;
    const bookLists = await axios.get('books');
    onSaveBooksList(bookLists.data);
  }

  render() {
    const { bookList } = this.props;
    console.log('----->bookList<-----', bookList);
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {bookList.map(book => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.instanceOf(Array).isRequired,
  onSaveBooksList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookList: state.books.bookList,
});

const mapDispatchToProps = dispatch => ({
  onSaveBooksList: data => dispatch(saveBooksList(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
