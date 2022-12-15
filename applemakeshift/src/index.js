import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Landing from './routes/Landing'
import Arcades from './routes/Arcades'
import Pinball from './routes/Pinball'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="arcades" element={<Arcades />} />
      <Route path="pinball" element={<Pinball />} />
    </Routes>
  </BrowserRouter>
);