import React from 'react';
import { ArrowRight } from 'lucide-react';
import { THEME } from '../constants/theme';
import { AnimatedButton } from './AnimatedButton';
import { TiltedCard } from './TiltedCard';

export function Hero({ setCurrentPage }) {
  const handleKnowMoreClick = () => {
    if (setCurrentPage) {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <style>{`
          @keyframes waveHand {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}</style>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          fontFamily: "'Montserrat', sans-serif",
          textShadow: `0 0 20px ${THEME.accent}15, 0 0 40px ${THEME.accent}10, 0 0 60px ${THEME.accent}05`,
        }}>
          Hey there{' '}
          <span
            style={{
              fontSize: '3rem',
              display: 'inline-block',
              transformOrigin: '70% 70%',
              animation: 'waveHand 1.8s ease-in-out infinite',
            }}
            aria-label="waving hand"
          >
            👋
          </span>
        </h1>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: "'Montserrat', sans-serif" }}>
          I'm <span style={{ color: THEME.accent }}>Your Name</span>
        </h2>
        <p
          style={{
            fontSize: '1.3rem',
            color: THEME.textSecondary,
            marginBottom: '0.5rem',
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          A 23 year old <span style={{ color: THEME.blue }}>Full Stack Developer</span> from India.
        </p>
        <p
          style={{
            fontSize: '1.15rem',
            color: THEME.textSecondary,
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          I get my dopamine by crafting innovative solutions and interesting side projects.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
          <AnimatedButton
            text="Know More"
            animationColor={THEME.accent}
            textStrokeColor="rgba(255,255,255,0.6)"
            fontSize="1.5em"
            onClick={handleKnowMoreClick}
          />
        </div>
      </div>
    </section>
  );
}
