import React from 'react';
import { ModalProvider } from './lib/ModalContext/ModalContext';
import ModalManager from './lib/ModalManager/ModalManager';
import ModalTrigger from './lib/ModalTrigger/ModalTrigger';
import './lib/ModalManager/ModalManager.css';
import './lib/Modal/Modal.css'; 
import './lib/Overlay/Overlay.css';
import './lib/ModalTrigger/ModalTrigger.css';

function App() {
  return (
    <ModalProvider> 
      <div className="App">
        <h1>React Modal Demo</h1>
        <ModalManager />
        <ModalTrigger 
          content={
            <div>
              <h2>Modal Content 1</h2>
              <ModalTrigger content={<h2>Modal Content 2</h2>} />
            </div>
          } 
        />
      </div>
    </ModalProvider>
  );
}

export default App;
