import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Freelance } from './components/Freelance';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { GridBackground } from './components/Background';
import { Toolbox } from './components/Toolbox';
import { THEME } from './constants/theme';
import { Work } from './components/Work';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Current page:', currentPage);
  }, [currentPage]);

  return (
    <div
      style={{
        backgroundColor: THEME.bg,
        color: THEME.text,
        minHeight: '100vh',
        fontFamily: "'Exo 2', system-ui, -apple-system, sans-serif",
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
          <Hero setCurrentPage={setCurrentPage} />
          <Projects />
          <Freelance />
        </>
      )}
      
      {currentPage === 'about' && <About />}
      {currentPage === 'work' && <Work />}
      {currentPage === 'tools' && <Toolbox />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}