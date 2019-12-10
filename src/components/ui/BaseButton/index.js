import React from 'react';
import PropTypes from 'prop-types';

function BaseButton({ name, text, handleClick, className, style, type }) {
  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={type} name={name} onClick={handleClick} className={className} style={style}>
        {text}
      </button>
    </>
  );
}

BaseButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

BaseButton.defaultProps = {
  className: '',
  style: {},
  type: 'button',
};

export default BaseButton;
