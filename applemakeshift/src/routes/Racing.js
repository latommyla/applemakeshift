import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcadenav from '../components/pages/racing/Arcadenav';
import Racingsit from '../components/pages/racing/Racingsitdown';
import Cocktail2Player from '../components/pages/racing/Racingstandup';
import Comparison from '../components/pages/racing/Comparison';
import Lowerbanner from '../components/pages/racing/Lowerbanner';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcadenav />
      <Racingsit />
      <Cocktail2Player />
      <Comparison />
      <Lowerbanner />
    </main>
  );
}
