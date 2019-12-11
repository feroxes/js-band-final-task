import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

function Modal({ modalTitle, children }) {
  return (
    <div className="modal-wrapper d-flex vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center">
      <div className="base-modal w-25 rounded p-3">
        <h2 className="modal-title font-weight-bold text-center">{modalTitle}</h2>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  children: PropTypes.instanceOf(Object),
};

Modal.defaultProps = {
  modalTitle: '',
  children: null,
};

export default Modal;
