// App.js
import React, { useEffect } from "react";
import ModalTrigger from "./lib/ModalTrigger/ModalTrigger";
import { useModal } from "./lib/ModalContext/ModalContext";
import "./lib/ModalManager/ModalManager.css";
import "./lib/Modal/Modal.css";
import "./lib/Overlay/Overlay.css";
import "./lib/ModalTrigger/ModalTrigger.css";

function App() {
  const { closeModal } = useModal(); 

  const closeModalOnEscape = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === "Escape") {
      closeModal(); 
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", closeModalOnEscape);

    return () => {
      document.removeEventListener("keyup", closeModalOnEscape);
    };
  }, []);

  return (
    <div className="App">
      <h1>React Modal Demo</h1>
      <ModalTrigger
        closeText="test close" // Option to customize close text
        closeClass="custom-close-class" // Option to customize close button CSS class
        closeExisting={true} // Option to close existing modals when opening a new one
        escapeClose={true} // Option to close modal when pressing escape key
        clickClose={true} // Option to close modal when clicking outside
        modalClass="custom-modal" // Option to customize modal CSS class
        fadeDuration={300} // Option to set fade animation duration
        fadeDelay={0.5} // Option to set delay for modal fade-in animation
        content={
          <div>
            <h2>Modal Content 1</h2>
            <ModalTrigger content={<h2>Modal Content 2</h2>} />
          </div>
        }
      />
    </div>
  );
}

export default App;
