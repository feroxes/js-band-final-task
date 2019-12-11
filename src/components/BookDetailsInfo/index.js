import React from 'react';
import PropTypes from 'prop-types';

function BookDetailsInfo({ currentBook }) {
  return (
    <div className="w-75 h-100">
      <div className="d-flex h-100">
        <div className="d-flex w-50 border rounded justify-content-center align-items-center p-2 mr-2">
          <img src={currentBook.cover} alt="Book Cover" />
        </div>
        <div>
          <h3 className="font-weight-bold mb-2 ml-2 mr-2" style={{ fontSize: '18px' }}>
            {currentBook.title}
          </h3>
          <p className="m-2">
            <span className="font-weight-bold">Author: </span>
            {currentBook.author}
          </p>
          <p className="m-2">
            <span className="font-weight-bold">Level: </span>
            {currentBook.level}
          </p>
          <p className="m-2">
            <span className="font-weight-bold">Tags: </span>
            {currentBook.tags.map(tag => `${tag}; `)}
          </p>
        </div>
      </div>
      <p className="mt-4">{currentBook.description}</p>
    </div>
  );
}

BookDetailsInfo.propTypes = {
  currentBook: PropTypes.instanceOf(Object).isRequired,
};

export default BookDetailsInfo;
