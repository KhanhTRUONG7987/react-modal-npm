import React from 'react';
import { useModal } from '../ModalContext/ModalContext';
import '../Modal/Modal.css';
import './ModalTrigger.css';


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
