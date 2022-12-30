import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Banner from '../components/pages/landing/Banner';
import Playtop from '../components/pages/landing/Playmoretop';
import Playbot from '../components/pages/landing/Playmorebot';

export default function Landing() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Playtop />
      <Playbot />
    </main>
  );
}
