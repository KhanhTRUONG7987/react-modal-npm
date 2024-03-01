// src/components/ModalTrigger.js
import React from 'react';

const ModalTrigger = ({ children, openModal, content }) => {
  const handleClick = () => {
    openModal(content);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ModalTrigger;
