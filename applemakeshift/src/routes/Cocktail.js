import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcadenav from '../components/pages/cocktail/Arcadenav';
import Cocktail3Sided from '../components/pages/cocktail/TiltCocktail';
import Cocktail2Player from '../components/pages/cocktail/Cocktail2Player';
import Comparison from '../components/pages/cocktail/Comparison';
import Lowerbanner from '../components/pages/cocktail/Lowerbanner';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcadenav />
      <Cocktail3Sided />
      <Cocktail2Player />
      <Comparison />
      <Lowerbanner />
    </main>
  );
}
