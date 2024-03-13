import React from "react";
import { useModal } from "../ModalContext/ModalContext";
import PropTypes from "prop-types";
import "./ModalTrigger.css";

const ModalTrigger = ({ id, content, buttonText, closeText }) => {
  const { openModal, closeAllModals } = useModal();

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    //closeAllModals();

    openModal(content, closeText, id);
  };

  return (
    <button className="button" onClick={handleOpenModal}>
      {buttonText}
    </button>
  );
};

ModalTrigger.propTypes = {
  content: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  closeText: PropTypes.string,
};

ModalTrigger.defaultProps = {
  closeText: "X",
};

export default ModalTrigger;
