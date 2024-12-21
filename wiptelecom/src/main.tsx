import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Contract } from "./pages/Contract";
import NotFound from "./pages/NotFound";
import PoliticsEmail from "./pages/PoliticsEmail";
import PoliticsApp from "./pages/PoliticsApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contrato" element={<Contract />} />
        <Route
          path="/politica-de-privacidade-email"
          element={<PoliticsEmail />}
        />
        <Route path="/politica-de-privacidade-app" element={<PoliticsApp />} />
        <Route path="/politica" element={<PoliticsApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
