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
import Terms from './routes/ourpolicies/termsandconditions'
import Privacypolicy from './routes/ourpolicies/privacypolicy'
import Shipping from './routes/ourpolicies/shippingdelivery'
import Warranty from './routes/ourpolicies/warranty'
import Return from './routes/ourpolicies/returnpolicy'

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
      <Route path="/termsandconditions" element={<Terms />} />
      <Route path="/privacypolicy" element={<Privacypolicy />} />
      <Route path="/shippinganddelivery" element={<Shipping />} />
      <Route path="/returnpolicy" element={<Return />} />
      <Route path="/warranty" element={<Warranty />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);