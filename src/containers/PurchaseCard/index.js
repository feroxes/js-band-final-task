import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import BaseButton from '../../components/ui/BaseButton';
import PurchaseCardEmptyCard from '../../components/PurchaseCard/PurchaseCardEmptyCard';
import PurchaseCardList from '../../components/PurchaseCard/PurchaseCardList';

import { clearCard } from '../../actions/purchaseCard';

class PurchaseCard extends Component {
  handleClick = async () => {
    const { onClearCard } = this.props;
    const books = this.formatDataBeforeSend();
    await axios.post('purchase', { books });
    onClearCard();
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

  render() {
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
      </div>
    );
  }
}

PurchaseCard.propTypes = {
  countOfProducts: PropTypes.number.isRequired,
  basket: PropTypes.instanceOf(Array).isRequired,
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
