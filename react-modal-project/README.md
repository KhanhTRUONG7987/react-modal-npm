# React Modal Project

Welcome to the React Modal Project! This project provides a simple and customizable modal component for React applications.

## Installation

You can install the React Modal Project via npm:

```bash
npm install react-modal-dk2
```

ou

```bash
yarn add react-modal-dk2
```

## Usage

To use the project, follow these steps:

Import the module:

```bash
import Modal from 'react-modal-dk2;
import ModalTrigger from 'react-modal-dk2/dist/lib/ModalTrigger/ModalTrigger.js';
import { useModal } from 'react-modal-dk2/dist/lib/ModalContext/ModalContext.js';
import 'react-modal-dk2/dist/lib/ModalTrigger/ModalTrigger.css';

```

## Props

The Modal component accepts the following props:

|              Props | Description                                                                                                   |
| -----------------: | ------------------------------------------------------------------------------------------------------------- |
|           isOpen (boolean, required) | Controls whether the modal is open or closed.                              |
|              onClose (function, required) | Callback function to handle modal closing.                                                 |
|           title (string)| Title of the modal.                               |
|               closeText (string) | Text for the close button.            |
|           closeClass (string) | Additional CSS class for the close button.                                   |
|         closeExisting (boolean) | Option to close existing modals when opening a new one.|
|      escapeClose (boolean) | Option to close modal when pressing the escape key.           |
| clickClose (boolean) | Option to close modal when clicking outside.  |
|           modalClass (string) | Additional CSS class for styling the modal. |
|               fadeDuration (number)| Duration of the fade animation.|
|            fadeDelay (number) | Delay for the modal fade-in animation.     |

## Examples

```bash
import React, { useEffect } from "react";
import ModalTrigger from 'react-modal-dk2/dist/lib/ModalTrigger/ModalTrigger.js';
import { useModal } from 'react-modal-dk2/dist/lib/ModalContext/ModalContext.js';
import 'react-modal-dk2/dist/lib/ModalTrigger/ModalTrigger.css';

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
        id="testModal2"
        open={modalOpen2}
        onClose={() => {
          setModalOpen2(false);
        }}
        content={
          <div style={{ background: "red", width: 200 }}>
            <ModalTrigger
              id="textModal3"
              escapeClose={false}
              content={<h2>Modal Content 2</h2>}
              buttonText="Open"
            />
          </div>
        }
      />

      <ModalTrigger
        buttonText="Open"
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
              id="textModal4"
              escapeClose={false}
              buttonText="Open"
              content={<h2>Modal Content 2</h2>}
            />
          </div>
        }
      />
    </div>
  );
}

export default App;
```

## Customisation

You can customize the appearance and behavior of the modal by providing custom CSS classes or styles. Additionally, you can modify the Modal component to add more features or functionality as needed.

## License

This project is licensed under the MIT License - see the [LICENSE] file for details.
