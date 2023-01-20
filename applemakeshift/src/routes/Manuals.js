import React from 'react';

import Navbar from './../components/navbar/Navbar';
import Manual from './../components/manualsandinstructions/manuals'
import Footer from './../components/footer/Footer';

export default function Manuals() {
  return (
    <main>
      <Navbar />
      <Manual />
      <Footer />
    </main>
  );
}
