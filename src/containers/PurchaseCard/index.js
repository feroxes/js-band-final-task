import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PurchaseCardEmptyCard from '../../components/PurchaseCard/PurchaseCardEmptyCard';
import PurchaseCardList from '../../components/PurchaseCard/PurchaseCardList';

class PurchaseCard extends Component {
  render() {
    const { countOfProducts, basket } = this.props;
    return (
      <div>
        {countOfProducts ? <PurchaseCardList basket={basket} /> : <PurchaseCardEmptyCard />}
      </div>
    );
  }
}

PurchaseCard.propTypes = {
  countOfProducts: PropTypes.number.isRequired,
  basket: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  countOfProducts: state.purchaseCard.countOfProducts,
  basket: state.purchaseCard.basket,
});

export default connect(
  mapStateToProps,
  null
)(PurchaseCard);
