import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import BaseButton from '../../components/ui/BaseButton';
import PurchaseCardEmptyCard from '../../components/PurchaseCard/PurchaseCardEmptyCard';
import PurchaseCardList from '../../components/PurchaseCard/PurchaseCardList';
import Modal from '../../components/ui/Modal';

import { clearCard } from '../../actions/purchaseCard';
import clearLocalStorage from '../../helpers';

class PurchaseCard extends Component {
  constructor() {
    super();
    this.state = {
      isModalShown: false,
    };
  }

  handleClick = async () => {
    const { onClearCard } = this.props;
    const books = this.formatDataBeforeSend();
    try {
      await axios.post('purchase', { books });
      onClearCard();
      this.toggleModal();
    } catch (e) {
      if (e.response.data.message === 'Unauthorized') {
        const { history } = this.props;
        clearLocalStorage();
        history.push('/signin');
      } else console.error(`${e.name}: ${e.message}`);
    }
  };

  formatDataBeforeSend = () => {
    const { basket } = this.props;
    const result = [];
    basket.forEach(item => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < item.count; i++) {
        result.push(item.item.id);
      }
    });
    return result;
  };

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  render() {
    const { isModalShown } = this.state;
    const { countOfProducts, basket } = this.props;
    return (
      <div>
        {countOfProducts ? (
          <div className="d-flex flex-column px-5">
            <BaseButton
              handleClick={this.handleClick}
              text="Purchase"
              name="purchase"
              className="border rounded bg-success p-2 align-self-end my-2"
              style={{ width: '150px' }}
            />
            <PurchaseCardList basket={basket} />
          </div>
        ) : (
          <PurchaseCardEmptyCard />
        )}
        {isModalShown && (
          <Modal modalTitle="Thank you for your order!">
            <p className="text-center my-4">The order was successfully sent.</p>
            <Link to="/books">
              <BaseButton
                handleClick={this.toggleModal}
                text="Continue shopping"
                name="continueShopping"
                className="border rounded p-2 text-success font-weight-bold"
              />
            </Link>
          </Modal>
        )}
      </div>
    );
  }
}

PurchaseCard.propTypes = {
  countOfProducts: PropTypes.number.isRequired,
  basket: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  onClearCard: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  countOfProducts: state.purchaseCard.countOfProducts,
  basket: state.purchaseCard.basket,
});

const mapDispatchToProps = dispatch => ({
  onClearCard: () => dispatch(clearCard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseCard);
