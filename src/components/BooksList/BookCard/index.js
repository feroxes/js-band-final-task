import React from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../ui/BaseButton';

function BookCard({ book }) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between p-2 border rounded m-3"
      style={{ width: '20%' }}
    >
      <img src={book.cover} alt="Book Cover" style={{ height: '200px' }} />
      <p className="font-weight-bold align-self-start">{book.title}</p>
      <p className="align-self-start">{book.author}</p>
      <div className="w-100 d-flex justify-content-between align-items-center mt-5">
        <p className="font-weight-bold">{book.price} $</p>
        <BaseButton
          handleClick={() => {}}
          text="View Details"
          name="viewDetails"
          className="border rounded p-2 bg-light"
        />
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookCard;
