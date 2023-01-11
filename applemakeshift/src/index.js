import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Landing from './routes/Landing'
import Arcades from './routes/Arcades'
import Cocktail from './routes/Cocktail'
import Pinball from './routes/Pinball'
import Product from './routes/Product'
import Racing from './routes/Racing'
import Winebarrel from './routes/Winebarrel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/standup" element={<Arcades />} />
      <Route path="/cocktail" element={<Cocktail />} />
      <Route path="/pinball" element={<Pinball />} />
      <Route path="/racing" element={<Racing />} />
      <Route path="/winebarrel" element={<Winebarrel />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);