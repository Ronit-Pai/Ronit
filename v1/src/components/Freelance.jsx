import React from 'react';
import { Mail } from 'lucide-react';
import { THEME } from '../constants/theme';

export function Freelance() {
  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            background: `linear-gradient(135deg, ${THEME.surface}, ${THEME.borderLight})`,
            borderRadius: '1.5rem',
            padding: '3rem',
            border: `1px solid ${THEME.border}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '400px',
              height: '400px',
              background: `radial-gradient(circle, ${THEME.accent}15, transparent)`,
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          ></div>
          <h2
            style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Want to <span style={{ color: THEME.accent }}>collaborate</span>?!
          </h2>
          <p
            style={{
              color: THEME.textSecondary,
              marginBottom: '2rem',
              fontSize: '1rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Have a project that needs a professional touch? Let's work together!
          </p>
          <a
            href="mailto:ronit14pai06@gmail.com"
            style={{
              background: THEME.accent,
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
              position: 'relative',
              zIndex: 1,
              textDecoration: 'none',
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
            <Mail size={18} /> Hit me up!
          </a>
        </div>
      </div>
    </section>
  );
}
