import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcadenav from '../components/pages/winebarrel/Arcadenav';
import Racingsit from '../components/pages/winebarrel/MidSizeBarrel';
import Cocktail2Player from '../components/pages/winebarrel/XLWineBarrel';
import Comparison from '../components/pages/winebarrel/Comparison';
import Lowerbanner from '../components/pages/winebarrel/Lowerbanner';
import Footer from '../components/footer/Footer';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcadenav />
      <Racingsit />
      <Cocktail2Player />
      <Comparison />
      <Lowerbanner />
      <Footer />
    </main>
  );
}
