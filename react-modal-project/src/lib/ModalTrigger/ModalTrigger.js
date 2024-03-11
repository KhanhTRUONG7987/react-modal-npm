// ModalTrigger.js
import React from "react";
import { useModal } from "../ModalContext/ModalContext";
import PropTypes from "prop-types"; 
import "./ModalTrigger.css";

const ModalTrigger = ({
  content,
  closeText,
  closeExisting,
  escapeClose,
  clickClose, 
  modalClass, 
  fadeDuration, 
  fadeDelay, 
}) => {
  const { openModal, closeAllModals } = useModal(); // include ... in the destructuring

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // close existing modals if closeExisting is true
    if (closeExisting) {
      closeAllModals(); 
    }

    openModal(content, closeText, escapeClose, {
      closeText,
      clickClose, 
      modalClass, 
      fadeDuration,
      fadeDelay,
    });
  };

  return (
    <button className="button" onClick={handleOpenModal}>
      Open Modal
    </button>
  );
};

// Define propTypes for type validation
ModalTrigger.propTypes = {
  content: PropTypes.node.isRequired,
  closeText: PropTypes.string,
  closeExisting: PropTypes.bool,
  escapeClose: PropTypes.bool,
  clickClose: PropTypes.bool, 
  modalClass: PropTypes.string, 
  fadeDuration: PropTypes.number, 
  fadeDelay: PropTypes.number, 
};

// Define defaultProps for default values
ModalTrigger.defaultProps = {
  closeText: "X",
  closeExisting: true,
  escapeClose: true,
  clickClose: true, 
  modalClass: "", 
  fadeDuration: 300, 
  fadeDelay: 0.5, 
};

export default ModalTrigger;
