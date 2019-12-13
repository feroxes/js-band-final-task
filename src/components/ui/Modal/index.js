import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.modalWrapper = React.createRef();
  }

  componentDidMount() {
    this.modalWrapper.focus();
  }

  render() {
    const { modalTitle, children, handleKeyUp } = this.props;
    return (
      <div
        ref={elem => (this.modalWrapper = elem)}
        className="modal-wrapper d-flex vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center"
        tabIndex="0"
        onKeyDown={e => handleKeyUp(e)}
      >
        <div className="base-modal d-flex flex-column align-items-center justify-content-center rounded p-4">
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
};

Modal.defaultProps = {
  modalTitle: '',
  children: null,
};

export default Modal;
