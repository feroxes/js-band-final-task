import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookDetailsInfo from '../../components/BookDetailsInfo';
import BookPurchase from '../../components/BookPurchase';
import Modal from '../../components/ui/Modal';
import BaseButton from '../../components/ui/BaseButton';

class BookDetails extends Component {
  constructor() {
    super();
    this.state = {
      currentBook: null,
      isModalShown: false,
      count: '0',
    };
  }

  componentDidMount() {
    const { match, booksList } = this.props;
    const currentBook = booksList.filter(book => book.id === match.params.id);
    this.setState({ currentBook: { ...currentBook[0] } });
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  setCountOfBooks = count => {
    this.setState({ count });
  };

  render() {
    const { currentBook, isModalShown, count } = this.state;
    return (
      <div className="d-flex w-100 p-5">
        {currentBook && (
          <>
            <BookDetailsInfo currentBook={currentBook} />
            <BookPurchase
              currentBook={currentBook}
              toggleModal={this.toggleModal}
              setCountOfBooks={this.setCountOfBooks}
            />
            {isModalShown && (
              <Modal modalTitle="Thank you for your order!">
                <p className="text-center my-4">
                  The book{Number(count) > 1 ? 's' : ''} has been successfully added to the cart
                </p>
                <BaseButton
                  handleClick={this.toggleModal}
                  text="Continue shopping"
                  name="continueShopping"
                  className="border rounded p-2 text-success font-weight-bold"
                />
              </Modal>
            )}
          </>
        )}
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
