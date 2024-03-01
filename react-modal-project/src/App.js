import React from 'react';
import { ModalManager } from './components/ModalManager';
import { Overlay } from './components/Overlay';

function App() {
  const modals = [
    { content: "Modal 1 Content" },
    { content: "Modal 2 Content" },
    // ... 
  ];

  return (
    <div className="App">
      <h1>React Modal Demo</h1>
      <ModalManager modals={modals} />
      <Overlay isOpen={false} />
    </div>
  );
}

export default App;
