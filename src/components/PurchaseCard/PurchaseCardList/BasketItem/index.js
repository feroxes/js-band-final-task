import React from 'react';
import PropTypes from 'prop-types';

function BasketItem({ basketItem }) {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border rounded my-1">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mr-5 font-weight-bold">{basketItem.item.title}</h3>
        <p>{basketItem.count} items</p>
      </div>
      <p>Total price: {basketItem.item.price * basketItem.count} $</p>
    </div>
  );
}

BasketItem.propTypes = {
  basketItem: PropTypes.instanceOf(Object).isRequired,
};

export default BasketItem;
