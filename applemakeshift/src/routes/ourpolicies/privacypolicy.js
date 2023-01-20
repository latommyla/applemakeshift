import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Privacy from '../../components/ourpolicies/privacypolicy.js'
import Footer from '../../components/footer/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <Privacy />
      <Footer />
    </main>
  );
}
