import React, { createContext, useContext, useState, useEffect } from "react";
import ModalManager from "../ModalManager/ModalManager";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (content, closeText) => {
    setModals((prevModals) => [
      ...prevModals,
      { id: Date.now(), content, closeText },
    ]);
  };

  const closeModal = (id) => {
    setModals((prevModals) => prevModals.filter((modal) => modal.id !== id));
  };

  const isModalOpen = () => {
    return modals.length > 0;
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, isModalOpen }}>
      <ModalManager />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalContext;
