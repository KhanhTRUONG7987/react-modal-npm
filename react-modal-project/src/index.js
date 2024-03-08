import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./lib/ModalContext/ModalContext"; 
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ModalProvider> 
    <App />
  </ModalProvider>
);
