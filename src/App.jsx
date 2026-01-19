import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Freelance } from './components/Freelance';
import { Footer } from './components/Footer';
import { GridBackground } from './components/Background';
import { THEME } from './constants/theme';

export default function Portfolio() {
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

      <Header />
      <Hero />
      <Projects />
      <Freelance />
      <Footer />
    </div>
  );
}