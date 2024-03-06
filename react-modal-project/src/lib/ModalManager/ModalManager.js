import React from 'react'; 
import { useModal } from '../ModalContext/ModalContext';
import '../ModalManager/ModalManager.css';
import '../Modal/Modal.css';
import '../Overlay/Overlay.css';


const ModalManager = () => {
  const { modals, closeModal } = useModal();
  const isLastModalActive = modals.length > 0 && modals[modals.length - 1].isActive;

  return (
    <div className={`modal-manager ${isLastModalActive ? 'overlay-active' : ''}`}>
      {modals.map((modal, index) => (
        <React.Fragment key={modal.id}>
          {index < modals.length - 1 && ( // Apply overlay to all modals except the last one
            <div className="overlay" onClick={() => closeModal(modal.id)}></div>
          )}
          <div className={`modal ${modal.isActive ? 'active' : ''}`}>
            {modal.content}
            <button className="close-button" onClick={() => closeModal(modal.id)}>X</button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ModalManager;
