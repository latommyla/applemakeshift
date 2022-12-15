import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Arcade from '../components/pages/arcade/Arcadespage';
import Terminator from '../components/pages/arcade/TR2Terminator';

export default function Arcades() {
  return (
    <main>
      <Navbar />
      <Arcade />
      <Terminator />
    </main>
  );
}
