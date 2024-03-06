// App.js
import React from 'react';
import { ModalProvider } from './components/ModalContext'; 
import ModalManager from './components/ModalManager';
import ModalTrigger from './components/ModalTrigger';
import './css/ModalManager.css';
import './css/Modal.css';
import './css/Overlay.css';
import './css/ModalTrigger.css';

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
