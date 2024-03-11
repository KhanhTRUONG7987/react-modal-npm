import React from "react";
import { useModal } from "../ModalContext/ModalContext";
import PropTypes from "prop-types"; 
import "./ModalTrigger.css";

const ModalTrigger = ({ content, closeText }) => {
  const { openModal, closeAllModals } = useModal();

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    closeAllModals(); 

    openModal(content, closeText);
  };

  return (
    <button className="button" onClick={handleOpenModal}>
      Open Modal
    </button>
  );
};

ModalTrigger.propTypes = {
  content: PropTypes.node.isRequired,
  closeText: PropTypes.string,
};

ModalTrigger.defaultProps = {
  closeText: "X",
};

export default ModalTrigger;
