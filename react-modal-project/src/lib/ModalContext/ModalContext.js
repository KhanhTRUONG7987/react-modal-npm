import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import ModalManager from "../ModalManager/ModalManager";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, _setModals] = useState([]);
  const modalsRef = useRef(modals);
  const setModals = (data) => {
    modalsRef.current = data;
    _setModals(data);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (modalsRef.current.length < 1) {
      return;
    }
    if (event.key === "Escape") {
      const lastModal = modalsRef.current[modalsRef.current.length - 1];
      if (lastModal && lastModal.escapeClose) {
        closeModal(lastModal.id);
      }
    }
  };

  const openModal = (
    content,
    closeText = "Close",
    id = Date.now(),
    options = {}
  ) => {
    const defaultOptions = {
      closeExisting: true,
      escapeClose: true,
      clickClose: true,
      closeClass: "",
      modalClass: "modal",
      showClose: true,
      fadeDuration: null,
      fadeDelay: 1.0,
    };

    const modal = {
      id: id,
      content,
      closeText,
      ...defaultOptions,
      ...options,
    };
    setModals([...modalsRef.current, modal]);
  };

  const closeModal = (id) => {
    setModals(modalsRef.current.filter((modal) => modal.id !== id));
  };

  const closeAllModals = () => {
    setModals([]);
  };

  const isModalOpen = () => {
    return modalsRef.current.length > 0;
  };

  const value = {
    modals: modalsRef.current,
    openModal,
    closeModal,
    closeAllModals,
    isModalOpen,
    setModals,
  };

  return (
    <ModalContext.Provider value={value}>
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
