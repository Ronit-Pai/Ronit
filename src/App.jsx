import React, { useState, useEffect } from 'react';
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
      
      {currentPage === 'work' && (
        <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
          <h1>Work Coming Soon</h1>
        </div>
      )}
      
      {currentPage === 'resume' && (
        <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
          <h1>Resume Coming Soon</h1>
        </div>
      )}
      
      <Footer />
    </div>
  );
}