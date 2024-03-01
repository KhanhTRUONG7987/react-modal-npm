import { createRoot } from "react-dom/client";
export { default as Modal } from './components/Modal';
export { default as ModalManager } from './components/ModalManager';
export { default as Overlay } from './components/Overlay';
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
      <App />
);