import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

// Navbar - Arcades 
import Landing from './routes/Landing'
import Arcades from './routes/Arcades'
import Cocktail from './routes/Cocktail'
import Pinball from './routes/Pinball'
import Product from './routes/Product'
import Racing from './routes/Racing'
import Winebarrel from './routes/Winebarrel'

// Footer - Our Policies
import Terms from './routes/ourpolicies/termsandconditions'
import Privacypolicy from './routes/ourpolicies/privacypolicy'
import Shipping from './routes/ourpolicies/shippingdelivery'
import Warranty from './routes/ourpolicies/warranty'
import Return from './routes/ourpolicies/returnpolicy'

// Footer - Navigate
import About from './routes/ourpolicies/aboutus'
import Manual from './routes/Manuals'

// Footer - Get Connected
import Affiliate from './routes/getconnected/Affiliate'

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
      <Route path="/aboutus" element={<About />} />
      <Route path="/manualsandinstructions" element={<Manual />} />
      <Route path="/affiliateprogram" element={<Affiliate />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);