import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/css/styles.css";
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   // </React.StrictMode>
);
