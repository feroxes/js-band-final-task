import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookDetailsInfo from '../../components/BookDetailsInfo';

class BookDetails extends Component {
  constructor() {
    super();
    this.state = {
      currentBook: null,
    };
  }

  componentDidMount() {
    const { match, booksList } = this.props;
    const currentBook = booksList.filter(book => book.id === match.params.id);
    this.setState({ currentBook: { ...currentBook[0] } });
  }

  render() {
    const { currentBook } = this.state;
    return (
      <div className="d-flex w-100 p-5">
        {currentBook && <BookDetailsInfo currentBook={currentBook} />}
      </div>
    );
  }
}

BookDetails.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  booksList: state.books.booksList,
});

export default connect(
  mapStateToProps,
  null
)(BookDetails);
