import React from 'react';
import HeroSection from './components/HeroSection';
import AboutFathersDay from './components/AboutFathersDay';
import GiftIdeas from './components/GiftIdeas';
import SocialFeed from './components/SocialFeed';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutFathersDay />
      <GiftIdeas />
      <SocialFeed />
      <FooterCTA />
    </div>
  );
}

export default App;