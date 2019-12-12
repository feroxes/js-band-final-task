import React from 'react';

const Spinner = () => {
  return (
    <div
      className="min-vh-100 min-vw-100 position-absolute d-flex justify-content-center align-items-center"
      style={{ top: 0 }}
    >
      <img src={require('../../assets/images/spinner/spinner.gif')} alt="Spinner" />
    </div>
  );
};

export default Spinner;
