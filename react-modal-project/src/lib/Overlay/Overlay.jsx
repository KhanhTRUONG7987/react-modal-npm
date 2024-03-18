import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

const Overlay = ({ isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Overlay;
