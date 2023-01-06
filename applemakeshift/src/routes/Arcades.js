import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcadenav from '../components/pages/standup/Arcadenav';
import Terminator from '../components/pages/standup/TR2Terminator';
import TR1Slim from '../components/pages/standup/TR1Slim';
import Comparison from '../components/pages/standup/Comparison';
import Lowerbanner from '../components/pages/standup/Lowerbanner';
import Footer from '../components/footer/Footer';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcadenav />
      <Terminator />
      <TR1Slim />
      <Comparison />
      <Lowerbanner />
      <Footer />
    </main>
  );
}
