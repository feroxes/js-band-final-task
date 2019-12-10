import React from 'react';

function PurchaseCardEmptyCard() {
  return (
    <div
      style={{ minHeight: `calc(100vh - 100px)` }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h3>The card is empty :(</h3>
      <img src="https://img.icons8.com/dotty/80/000000/shopping-basket.png" alt="Basket icon" />
    </div>
  );
}

export default PurchaseCardEmptyCard;
