import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

import { isClickOutside } from '../../../helpers';

class Modal extends Component {
  constructor() {
    super();
    this.modal = React.createRef();
  }

  componentDidMount() {
    this.modal.focus();
  }

  handleOutsideClick = e => {
    const { closeModal } = this.props;
    if (isClickOutside(e, this.modal)) closeModal();
  };

  render() {
    const { modalTitle, children, handleKeyUp } = this.props;
    return (
      <div
        className="modal-wrapper d-flex vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center"
        onClick={e => this.handleOutsideClick(e)}
      >
        <div
          className="base-modal d-flex flex-column align-items-center justify-content-center rounded p-4"
          ref={elem => {
            this.modal = elem;
          }}
          tabIndex="0"
          onKeyDown={e => handleKeyUp(e)}
        >
          <h2 className="modal-title font-weight-bold text-center">{modalTitle}</h2>
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  children: PropTypes.instanceOf(Object),
  handleKeyUp: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalTitle: '',
  children: null,
};

export default Modal;
