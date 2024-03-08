import React from "react";
import { useModal } from "../ModalContext/ModalContext";
import "../ModalManager/ModalManager.css";
import "../Modal/Modal.css";
import "../Overlay/Overlay.css";

const ModalManager = () => {
  const { modals, closeModal } = useModal();
  const isLastModalActive =
    modals.length > 0 && modals[modals.length - 1].isActive;

  const isModalOpen = modals.length > 0;

  return (
    <div
      className={`modal-manager ${isModalOpen ? "visible" : ""} ${
        isLastModalActive ? "overlay-active" : ""
      }`}
    >
      {modals.map((modal, index) => (
        <div
          className="modal-overlay"
          key={modal.id}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal(modal.id);
          }}
        >
          <div className={`modal ${modal.isActive ? "active" : ""}`}>
            {modal.content}
            <button
              className="close-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal(modal.id);
              }}
            >
              {modal.closeText ? modal.closeText : "X"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModalManager;
