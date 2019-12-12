import React from 'react';

function NotFound() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={require('../../assets/images/notFound/notFound.jpg')}
        alt="Not Found"
        className="mt-5"
      />
    </div>
  );
}

export default NotFound;
