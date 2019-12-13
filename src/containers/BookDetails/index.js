import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BookDetailsInfo from '../../components/BookDetailsInfo';
import BookPurchase from '../../components/BookPurchase';
import Modal from '../../components/ui/Modal';
import BaseButton from '../../components/ui/BaseButton';
import { clearLocalStorage } from '../../helpers';

class BookDetails extends Component {
  constructor() {
    super();
    this.state = {
      currentBook: null,
      isModalShown: false,
    };
  }

  componentDidMount() {
    const { booksList } = this.props;
    if (!booksList.length) this.getCurrentBook();
    else this.setCurrentBook();
  }

  componentDidUpdate(prevProps) {
    const { match, booksList } = this.props;
    const { currentBook } = this.state;
    if (!booksList.length && !currentBook) this.getCurrentBook();
    else if (prevProps.match.params.id !== match.params.id) this.setCurrentBook();
  }

  getCurrentBook = async () => {
    const { match } = this.props;
    try {
      const currentBook = await axios.get(`books/${match.params.id}`);
      this.setState({ currentBook: currentBook.data });
    } catch (e) {
      const { history } = this.props;
      if (e.response.status === 404) {
        history.push('/not-found');
      } else if (e.response.data.message === 'Unauthorized') {
        clearLocalStorage();
        history.push('/signin');
      } else console.error(`${e.name}: ${e.message}`);
    }
  };

  setCurrentBook = () => {
    const { match, booksList, history } = this.props;
    if (!booksList.length) this.getCurrentBook();
    else {
      const currentBook = booksList.filter(book => book.id === match.params.id);
      if (!currentBook.length) history.push('/not-found');
      this.setState({ currentBook: { ...currentBook[0] } });
    }
  };

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  closeModal = () => {
    this.setState({ isModalShown: false });
  };

  handleKeyUp = e => {
    if (e.keyCode === 27 || e.keyCode === 13) this.closeModal();
  };

  render() {
    const { currentBook, isModalShown } = this.state;
    return (
      <div className="d-flex w-100 p-5">
        {currentBook && (
          <>
            <BookDetailsInfo currentBook={currentBook} />
            <BookPurchase currentBook={currentBook} toggleModal={this.toggleModal} />
            {isModalShown && (
              <Modal
                modalTitle="Thank you for your order!"
                handleKeyUp={this.handleKeyUp}
                closeModal={this.closeModal}
              >
                <p className="text-center my-4">The book has been successfully added to the cart</p>
                <Link to="/books">
                  <BaseButton
                    handleClick={this.toggleModal}
                    text="Continue shopping"
                    name="continueShopping"
                    className="border rounded p-2 text-warning font-weight-bold"
                  />
                </Link>
                <Link to="/card">
                  <BaseButton
                    handleClick={this.toggleModal}
                    text="Checkout"
                    name="checkout"
                    className="border rounded p-2 text-success font-weight-bold mt-2"
                  />
                </Link>
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
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  booksList: state.books.booksList,
});

export default connect(mapStateToProps, null)(BookDetails);
