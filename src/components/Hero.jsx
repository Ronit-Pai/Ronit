import React from 'react';
import { ArrowRight } from 'lucide-react';
import { THEME } from '../constants/theme';

export function Hero() {
  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Hey there <span style={{ fontSize: '2.5rem' }}>👋</span>
          </h1>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            I'm <span style={{ color: THEME.accent }}>Your Name</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: THEME.textSecondary,
              marginBottom: '0.5rem',
            }}
          >
            A 23 year old <span style={{ color: THEME.blue }}>Full Stack Developer</span> from India.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: THEME.textSecondary,
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}
          >
            I get my dopamine by crafting innovative solutions and interesting side projects.
          </p>
          <button
            style={{
              background: THEME.accent,
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 10px 20px ${THEME.accent}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Know more about me <ArrowRight size={18} />
          </button>
        </div>
        <div
          style={{
            width: '100%',
            height: '400px',
            background: `linear-gradient(135deg, ${THEME.surface}, ${THEME.borderLight})`,
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5rem',
            overflow: 'hidden',
            border: `2px solid ${THEME.border}`,
            boxShadow: `inset 0 0 30px ${THEME.accent}20`,
          }}
        >
          📸
        </div>
      </div>
    </section>
  );
}
