import React, { useState } from "react";
import ModalTrigger from "./lib/ModalTrigger/ModalTrigger";
import Modal from "./lib/Modal/Modal";

function App() {
  const [modalOpen1, setModalOpen1] = useState(true);
  const [modalOpen2, setModalOpen2] = useState(true);

  return (
    <div className="App">
      <h1>React Modal Demo</h1>

      <Modal
        id="testModal1"
        open={modalOpen1}
        onClose={() => {
          setModalOpen1(false);
        }}
        content={<div>TEST1</div>}
        escapeClose={true}
      />

      <Modal
        id="textModal2"
        open={modalOpen2}
        onClose={() => {
          setModalOpen2(false);
        }}
        content={
          <div style={{ background: "red", width: 200 }}>
            <ModalTrigger
              escapeClose={false}
              content={<h2>Modal Content 2</h2>}
            />
          </div>
        }
      />

      <ModalTrigger
        closeText="test close"
        closeClass="custom-close-class"
        closeExisting={true}
        escapeClose={true}
        clickClose={true}
        modalClass="custom-modal"
        fadeDuration={300}
        fadeDelay={0.5}
        content={
          <div>
            <h2>Modal Content 1</h2>
            <ModalTrigger
              escapeClose={false}
              content={<h2>Modal Content 2</h2>}
            />
          </div>
        }
      />
    </div>
  );
}

export default App;
