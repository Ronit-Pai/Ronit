import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Freelance } from './components/Freelance';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Toolbox } from './components/Toolbox';
import { THEME } from './constants/theme';
import { Work } from './components/Work';

const DottedGridBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,

        /* Tiny white dots + very soft white glow */
        backgroundImage: `
          radial-gradient(circle, #ffffff 1.2px, transparent 1.2px),
          radial-gradient(circle, rgba(255,255,255,0.15) 2.2px, transparent 3px)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 0 0',
        backgroundAttachment: 'fixed',

        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.25,
      }}
    />
  );
};


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
        width: '100%',
        margin: 0,
        padding: 0,
        zIndex: 1,
      }}
    >
      {/* Background */}
      <DottedGridBackground />

      {/* Content wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Projects setCurrentPage={setCurrentPage} />
            <Freelance />
          </>
        )}

        {currentPage === 'about' && <About />}
        {currentPage === 'work' && <Work />}
        {currentPage === 'tools' && <Toolbox />}

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
