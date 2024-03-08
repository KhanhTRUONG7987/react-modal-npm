import React from "react";
import { useModal } from "../ModalContext/ModalContext";
import "./ModalTrigger.css";

const ModalTrigger = ({ content, closeText, closeExisting }) => {
  const { openModal, closeModal, modals } = useModal(); // include closeModal in the destructuring

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // close existing modals if closeExisting is true
    if (closeExisting) {
      modals.forEach(modal => {
        closeModal(modal.id); // call closeModal directly from useModal
      });
    }

    openModal(content, closeText);
  };

  return (
    <button className="button" onClick={handleOpenModal}>
      Open Modal
    </button>
  );
};

export default ModalTrigger;
