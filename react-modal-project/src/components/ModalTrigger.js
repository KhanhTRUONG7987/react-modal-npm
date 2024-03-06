// react-modal-project/src/components/ModalTrigger.js
import React from 'react';
import { useModal } from './ModalContext';
import '../css/Modal.css';
import '../css/ModalTrigger.css';

const ModalTrigger = ({ content }) => {
  const { openModal, modals } = useModal();

  const handleOpenModal = () => {
    if (!modals.find(modal => modal.content === content)) {
      openModal(content);
    }
  };

  return (
    <button className="button" onClick={handleOpenModal}>Open Modal</button>
  );
};

export default ModalTrigger;
