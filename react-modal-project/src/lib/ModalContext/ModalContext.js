import React, { createContext, useContext, useState } from 'react';  

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (content) => {
    setModals((prevModals) => [
      ...prevModals,
      { id: Date.now(), content }
    ]);
  };

  const closeModal = (id) => {
    setModals((prevModals) => prevModals.filter(modal => modal.id !== id));
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
