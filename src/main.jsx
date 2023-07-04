import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TareaContextoProvider } from "./contexto/TareaContexto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TareaContextoProvider>
      <App />
    </TareaContextoProvider>
  </React.StrictMode>
);
