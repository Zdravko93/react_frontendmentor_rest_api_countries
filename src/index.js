import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { AppContextProvider } from "./context/AppContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppContextProvider>
        <BrowserRouter basename="/react_frontendmentor_rest_api_countries">
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
