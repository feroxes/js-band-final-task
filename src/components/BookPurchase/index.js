import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BaseInput from '../ui/BaseInput';
import BaseButton from '../ui/BaseButton';

import { addItemToCard } from '../../actions/purchaseCard';

class BookPurchase extends Component {
  constructor() {
    super();
    this.state = {
      count: '0',
      isWarningShown: false,
    };
  }

  handleChanges = e => {
    const { currentBook } = this.props;
    const { name, value } = e.target;

    if (value > currentBook.count)
      this.setState({ [name]: String(currentBook.count), isWarningShown: true });
    else this.setState({ [name]: value, isWarningShown: false });
  };

  handleBlur = () => {
    this.setState({ isWarningShown: false });
  };

  clearState = () => {
    this.setState({
      count: '0',
    });
  };

  handleClick = () => {
    const { onAddItemToCard, currentBook, toggleModal } = this.props;
    const { count } = this.state;
    if (count === '0') return;
    onAddItemToCard({ item: currentBook, count });
    this.clearState();
    toggleModal();
  };

  render() {
    const { currentBook } = this.props;
    const { count, isWarningShown } = this.state;
    return (
      <div className="w-25 border rounded p-3 h-50 font-weight-bold">
        <div className="d-flex justify-content-between mb-2">
          <p>Price, $</p> <p>{currentBook.price}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p>Count</p>
          <div className="w-25">
            <BaseInput
              value={count}
              name="count"
              handleChanges={this.handleChanges}
              handleBlur={this.handleBlur}
              id="count"
              type="number"
              max={String(currentBook.count)}
            />
          </div>
        </div>
        <p
          className={`w-100 text-warning text-right ${isWarningShown ? 'd-flex' : 'd-none'}`}
          style={{ fontSize: '12px' }}
        >
          Sorry! There are only {currentBook.count} books available :(
        </p>
        <div className="d-flex justify-content-between mb-2">
          <p>Total Price</p>
          <p>{(currentBook.price * count).toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-end">
          <BaseButton
            handleClick={this.handleClick}
            text="Add to card"
            name="addToCard"
            className="border rounded p-2 bg-light"
          />
        </div>
      </div>
    );
  }
}

BookPurchase.propTypes = {
  currentBook: PropTypes.instanceOf(Object).isRequired,
  onAddItemToCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddItemToCard: data => dispatch(addItemToCard(data)),
});

export default connect(
  null,
  mapDispatchToProps
)(BookPurchase);
