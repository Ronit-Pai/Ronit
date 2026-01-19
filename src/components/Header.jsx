import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants/data';
import { THEME } from '../constants/theme';

export function Header() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <header
      style={{
        borderBottom: `1px solid ${THEME.border}`,
        padding: '1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        backgroundColor: `${THEME.bg}cc`,
        width: '100%',
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
          }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                style={{
                  color:
                    item.toLowerCase() === activeSection
                      ? THEME.accent
                      : THEME.text,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (item.toLowerCase() !== activeSection) {
                    e.target.style.color = THEME.blue;
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.toLowerCase() !== activeSection) {
                    e.target.style.color = THEME.text;
                  }
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
