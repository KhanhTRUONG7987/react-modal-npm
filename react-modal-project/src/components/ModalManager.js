// src/components/ModalManager.js

import React, { useState } from 'react';
import Modal from './Modal';

const ModalManager = ({ modals }) => {
  const [openModals, setOpenModals] = useState([]);

  const closeModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals.splice(index, 1);
    setOpenModals(updatedModals);
  };

  return (
    <div>
      {modals.map((modal, index) => (
        <Modal
          key={index}
          isOpen={true} 
          onClose={() => closeModal(index)}
          content={modal.content}
        />
      ))}
    </div>
  );
};

export default ModalManager;
