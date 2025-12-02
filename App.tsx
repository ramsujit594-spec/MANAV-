
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import WishSection from './components/WishSection';
import Footer from './components/Footer';
import { trackVisit } from './services/wishService';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Track unique visit on app load
    trackVisit();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Characters />
        <Gallery />
        <Countdown />
        <WishSection isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      </main>
      <Footer isAdmin={isAdmin} />
    </div>
  );
}

export default App;
