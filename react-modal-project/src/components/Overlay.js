// src/components/Overlay.js

import React from 'react';
import '../css/Overlay.css';

const Overlay = ({ isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
  );
};

export default Overlay;
