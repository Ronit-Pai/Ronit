import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { THEME } from '../constants/theme';

export function Projects() {
  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          Stuff I've enjoyed working on
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              style={{
                background: THEME.surface,
                border: `2px solid ${THEME.border}`,
                borderRadius: '1rem',
                padding: '2rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = THEME.accent;
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 15px 40px ${THEME.accent}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = THEME.border;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {project.image}
              </div>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: THEME.accent,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: THEME.textSecondary,
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                }}
              >
                {project.description}
              </p>
              <button
                style={{
                  background: 'transparent',
                  border: `1.5px solid ${THEME.accent}`,
                  color: THEME.accent,
                  padding: '0.5rem 1rem',
                  borderRadius: '1.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${THEME.accent}15`;
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <ExternalLink size={16} /> Check it out
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
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
            Checkout more projects →
          </button>
        </div>
      </div>
    </section>
  );
}
