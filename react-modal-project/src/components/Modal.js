// react-modal-project/src/components/Modal.js

import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from './ModalContext';
import '../css/Modal.css';

const Modal = ({ id, content, className }) => {
  const { closeModal, isModalOpen } = useModal();

  const modalClassName = isModalOpen(id) ? 'is-open' : '';
  const contentClassName = isModalOpen(id) ? 'is-open' : '';

  const handleClose = () => {
    closeModal(id);
  };

  return (
    <div className={`modal ${modalClassName} ${className}`}>
      <div className="modal-inner">
        <button className="close-button" onClick={handleClose}>X</button>
        <div className={`modal-content ${contentClassName}`}>{content}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
