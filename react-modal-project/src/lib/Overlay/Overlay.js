import React from 'react';
import './Overlay.css';
import '../Modal/Modal.css';


const Overlay = ({ isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
  );
};

export default Overlay;
