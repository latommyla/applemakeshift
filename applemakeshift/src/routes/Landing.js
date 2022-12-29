import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Banner from '../components/pages/landing/Banner';
import Play from '../components/pages/landing/Playmore';

export default function Landing() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Play />
    </main>
  );
}
