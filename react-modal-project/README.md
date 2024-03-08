# React Modal Project

Welcome to the React Modal Project! This project provides a simple and customizable modal component for React applications.

## Installation

You can install the React Modal Project via npm:

```bash
npm install react-modal-kt
```

ou

```bash
yarn add react-modal-kt
```

## Usage

To use the project, follow these steps:

Import the module:

```bash
import Modal from 'react-modal-kt';
```

Render the Modal component in your JSX:

```bash
<Modal 
  isOpen={true} 
  onClose={handleClose} 
  title="Modal Title"
  closeText="Close"
  closeClass="custom-close-class"
  closeExisting={true}
  escapeClose={true}
  clickClose={true}
  modalClass="custom-modal"
  fadeDuration={300}
  fadeDelay={0.5}
>
  {/* Modal Content Goes Here */}
</Modal>
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
```

## Customisation

You can customize the appearance and behavior of the modal by providing custom CSS classes or styles. Additionally, you can modify the Modal component to add more features or functionality as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
