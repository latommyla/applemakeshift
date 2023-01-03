import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcade from '../components/pages/arcade/Arcadespage';
import Terminator from '../components/pages/arcade/TR2Terminator';
import Cocktail from '../components/pages/arcade/Cocktail';
import Comparison from '../components/pages/arcade/Comparison';
import Lowerbanner from '../components/pages/arcade/Lowerbanner';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcade />
      <Terminator />
      <Cocktail />
      <Comparison />
      <Lowerbanner />
    </main>
  );
}
