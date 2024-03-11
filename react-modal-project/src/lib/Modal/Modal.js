import React, { useEffect } from "react";
import { useModal } from "../ModalContext/ModalContext";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ id, open, onClose, content }) => {
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (open) {
      openModal(content, "test close " + id, true, id);
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal(id);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [id, closeModal]);

  return null;
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};

export default Modal;
