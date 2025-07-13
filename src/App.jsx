import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurLegacy from './components/OurLegacy';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import HonoringElders from './components/HonoringElders';
import CulturalDressGuide from './components/CulturalDressGuide';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-bone-50' : 'bg-bone-50 text-gray-900'
      }`}>
        <Navigation isDark={isDark} />
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero isDark={isDark} />
              <OurLegacy isDark={isDark} />
              <WeddingInfo isDark={isDark} />
              <Gallery isDark={isDark} />
              <HonoringElders isDark={isDark} />
              <CulturalDressGuide isDark={isDark} />
              <RSVP isDark={isDark} />
              <Registry isDark={isDark} />
              <Guestbook isDark={isDark} />
            </>
          } />
        </Routes>
        
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;