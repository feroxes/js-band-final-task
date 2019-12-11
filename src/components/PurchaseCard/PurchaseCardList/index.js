import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

function PurchaseCardList({ basket }) {
  function countTotalPrice() {
    let price = 0;

    basket.forEach(item => {
      price += item.count * item.item.price;
    });
    return price.toFixed(2);
  }

  return (
    <div className="d-flex flex-column">
      {basket.map(basketItem => (
        <BasketItem basketItem={basketItem} key={basketItem.item.id} />
      ))}
      <p className="align-self-end font-weight-bold pr-3 my-3">Total price: {countTotalPrice()}$</p>
    </div>
  );
}

PurchaseCardList.propTypes = {
  basket: PropTypes.instanceOf(Object).isRequired,
};

export default PurchaseCardList;
