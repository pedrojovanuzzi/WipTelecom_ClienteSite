import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Contract } from './pages/Contract';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contrato" element={<Contract/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
