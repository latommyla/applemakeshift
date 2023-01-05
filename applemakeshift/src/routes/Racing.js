import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcadenav from '../components/pages/pinball/Arcadenav';
import TR2Pinball from '../components/pages/pinball/TR2Pinball';
import Cocktail2Player from '../components/pages/pinball/ComboPinball';
import Comparison from '../components/pages/pinball/Comparison';
import Lowerbanner from '../components/pages/pinball/Lowerbanner';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcadenav />
      <TR2Pinball />
      <Cocktail2Player />
      <Comparison />
      <Lowerbanner />
    </main>
  );
}
