import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../../ui/BaseButton';
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
    <div className="d-flex flex-column mt-3 px-5">
      <BaseButton
        handleClick={() => {}}
        text="Purchase"
        name="purchase"
        className="border rounded bg-success p-2 align-self-end mb-3"
        style={{ width: '150px' }}
      />
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
