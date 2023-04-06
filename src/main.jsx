import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStateProvider from "./Components/utils/global.context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
