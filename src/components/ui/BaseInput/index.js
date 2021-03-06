import React from 'react';
import PropTypes from 'prop-types';

function BaseInput({
  label,
  placeholder,
  name,
  id,
  type,
  value,
  handleChanges,
  className,
  isError,
  errorText,
  handleKeyUp,
  min,
  max,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={id} className="w-100 font-weight-bold d-flex align-items-center flex-column">
        {label || ''}
        <input
          type={type}
          id={id}
          className={className}
          name={name}
          value={value}
          onChange={e => handleChanges(e)}
          onKeyUp={e => handleKeyUp(e)}
          onBlur={e => handleBlur(e)}
          placeholder={placeholder}
          min={min}
          max={max}
        />
        {isError ? (
          <span className="text-danger font-weight-normal" style={{ fontSize: '11px' }}>
            {errorText}
          </span>
        ) : null}
      </label>
    </>
  );
}

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func,
  isError: PropTypes.bool,
  errorText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  handleBlur: PropTypes.func,
};

BaseInput.defaultProps = {
  label: null,
  type: 'text',
  className: 'form-control',
  placeholder: null,
  isError: false,
  errorText: '',
  handleKeyUp: () => {},
  handleBlur: () => {},
  min: '0',
  max: '',
};

export default BaseInput;
