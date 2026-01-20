import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Freelance } from './components/Freelance';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { GridBackground } from './components/Background';
import { THEME } from './constants/theme';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div
      style={{
        backgroundColor: THEME.bg,
        color: THEME.text,
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <GridBackground />

      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Projects />
          <Freelance />
        </>
      )}
      
      {currentPage === 'about' && <About />}
      
      <Footer />
    </div>
  );
}