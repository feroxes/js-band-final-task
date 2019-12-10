import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../../ui/BaseButton';

function PurchaseCardItems({ basket }) {
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
      {basket.map(basketItem => {
        return (
          <div className="d-flex justify-content-between align-items-center p-3 border rounded my-1">
            <div className="d-flex align-items-center">
              <h3 className="mr-5 font-weight-bold">{basketItem.item.title}</h3>
              <p>{basketItem.count} items</p>
            </div>
            <p>Total price: {basketItem.item.price * basketItem.count} $</p>
          </div>
        );
      })}
      <p className="align-self-end font-weight-bold pr-3 my-3">Total price: {countTotalPrice()}$</p>
    </div>
  );
}

PurchaseCardItems.propTypes = {
  basket: PropTypes.instanceOf(Object).isRequired,
};

export default PurchaseCardItems;
