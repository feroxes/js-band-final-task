import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function BasketIcon({ countOfProducts }) {
  return (
    <div className="position-relative">
      <img
        style={{ width: '50px' }}
        src="https://img.icons8.com/dotty/80/000000/shopping-basket.png"
        alt="Basket"
        className="mx-2"
      />
      <div
        className="d-flex justify-content-center align-items-center position-absolute bg-success rounded-circle "
        style={{ width: '18px', height: '18px', fontSize: '12px', top: 0, right: 0 }}
      >
        {countOfProducts}
      </div>
    </div>
  );
}

BasketIcon.propTypes = {
  countOfProducts: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  countOfProducts: state.purchaseCard.countOfProducts,
});

export default connect(mapStateToProps, null)(BasketIcon);
