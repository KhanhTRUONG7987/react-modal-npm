// src/components/Modal.js
import React from 'react';
import '../css/Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      {isOpen && (
        <div className="modal-content">
          <button className="close" onClick={onClose}>&times;</button>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
