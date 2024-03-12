import React, { useEffect } from "react";
import { useModal } from "../ModalContext/ModalContext";
import "./ModalManager.css"; 
import "../Modal/Modal.css"; 
import "../Overlay/Overlay.css"; 

const ModalManager = () => {
  const { modals, closeModal } = useModal();
  const isLastModalActive = modals.length > 0 && modals[modals.length - 1].isActive;

  const isModalOpen = modals.length > 0;

  useEffect(() => {
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        const lastModal = modals[modals.length - 1];
        if (lastModal && lastModal.escapeClose) {
          closeModal(lastModal.id);
        }
      }
    };

    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [modals, closeModal]);

  const handleCloseModal = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    closeModal(id);
  };

  return (
    <div className={`modal-manager ${isModalOpen ? "visible" : ""} ${isLastModalActive ? "overlay-active" : ""}`}>
      {modals.map((modal) => (
        <div className="modal-overlay" key={modal.id} onClick={(e) => handleCloseModal(e, modal.id)}>
          <div className={`modal ${modal.isActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
            {modal.content}
            <button className="close-button" onClick={(e) => handleCloseModal(e, modal.id)}>
              {modal.closeText ? modal.closeText : "X"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModalManager;
