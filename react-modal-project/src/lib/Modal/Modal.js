import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useModal } from "../ModalContext/ModalContext";
import "./Modal.css";

const Modal = ({
  id,
  content,
  closeText,
  closeClass,
  closeExisting,
  escapeClose,
  clickClose,
  modalClass,
  fadeDuration,
  fadeDelay,
}) => {
  const { closeModal, isModalOpen } = useModal();

  const modalClassName = isModalOpen(id) ? "is-open" : "";
  const contentClassName = isModalOpen(id) ? "is-open" : "";

  useEffect(() => {
    console.log("Modal useEffect hook executed");
    if (closeExisting) {
      closeModal(id);
    }

    const handleKeyUp = (event) => {
      console.log("Key pressed:", event.key);
      if (escapeClose && event.key === "Escape") {
        console.log("Closing modal...");
        closeModal(id);
      }
    };

    const handleClickOutside = (event) => {
      console.log("Clicked outside modal");
      if (clickClose && event.target.classList.contains("modal-overlay")) {
        console.log("Closing modal...");
        closeModal(id);
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [id, closeModal, escapeClose, clickClose, closeExisting]);

  const handleClose = () => {
    closeModal(id);
  };

  return (
    <div
      className={`modal ${modalClassName} ${modalClass}`}
      style={{ transition: `opacity ${fadeDuration}ms ease ${fadeDelay}s` }}
    >
      <div className="modal-inner">
        <button className={`close-button ${closeClass}`} onClick={handleClose}>
          {closeText}
        </button>
        <div className={`modal-content ${contentClassName}`}>{content}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeText: PropTypes.string,
  closeClass: PropTypes.string,
  closeExisting: PropTypes.bool,
  escapeClose: PropTypes.bool,
  clickClose: PropTypes.bool,
  modalClass: PropTypes.string,
  fadeDuration: PropTypes.number,
  fadeDelay: PropTypes.number,
};

Modal.defaultProps = {
  closeText: "X",
  closeClass: "",
  closeExisting: true,
  escapeClose: true,
  clickClose: true,
  modalClass: "",
  fadeDuration: 300,
  fadeDelay: 0.5,
};

export default Modal;
