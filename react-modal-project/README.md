# React Modal Project

Welcome to the React Modal Project! This project provides a simple and customizable modal component for React applications.

## Installation

You can install the React Modal Project via npm:

```bash
npm install react-modal-at
```

ou

```bash
yarn add react-modal-at
```

## Usage

To use the project, follow these steps:

Import the module:

```bash
import Modal from 'react-modal-at';
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
import ModalTrigger from 'react-modal-at/dist/lib/ModalTrigger/ModalTrigger.js';
import { useModal } from 'react-modal-at/dist/lib/ModalContext/ModalContext.js';
import 'react-modal-at/dist/lib/ModalTrigger/ModalTrigger.css';

function App() {
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
```

## Customisation

You can customize the appearance and behavior of the modal by providing custom CSS classes or styles. Additionally, you can modify the Modal component to add more features or functionality as needed.

## License

This project is licensed under the MIT License - see the [LICENSE] file for details.
