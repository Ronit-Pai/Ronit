import React, { useState, useRef, useEffect } from 'react';
import { NAV_ITEMS } from '../constants/data';
import { THEME } from '../constants/theme';
import resumePdf from '../assets/Resume.pdf';

export function Header({ currentPage = 'home', setCurrentPage }) {
  const [activeSection, setActiveSection] = useState(currentPage);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveSection(currentPage);
  }, [currentPage]);

  useEffect(() => {
    updateIndicator();
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, []);

  const updateIndicator = () => {
    const activeRef = navRefs.current[activeSection];
    if (activeRef && containerRef.current) {
      const { offsetLeft, offsetWidth } = activeRef;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  };

  const navigateTo = (itemKey) => {
    setActiveSection(itemKey);

    if (!setCurrentPage) return;

    if (itemKey === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (itemKey === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (itemKey === 'tools') {
      setCurrentPage('tools');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Fallback: treat as a page key if ever added later
    setCurrentPage(itemKey);
  };

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

        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          
          <div
            ref={containerRef}
            style={{
              display: 'flex',
              gap: '0.75rem',
              padding: '0.75rem',
              backgroundColor: THEME.surface,
              borderRadius: '9999px',
              border: `1px solid ${THEME.border}`,
              position: 'relative',
              animation: 'slideIn 0.5s ease-out',
            }}
          >
            {/* Animated background pill indicator */}
            <div
              style={{
                position: 'absolute',
                height: 'calc(100% - 1.5rem)',
                backgroundColor: `${THEME.accent}15`,
                border: `1px solid ${THEME.accent}40`,
                borderRadius: '9999px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                top: '0.75rem',
              }}
            />

            {/* Navigation items */}
            {NAV_ITEMS.map((item) => {
              const itemKey = item.toLowerCase();
              const isActive = itemKey === activeSection;
              const isResume = itemKey === 'resume';
              const href = isResume ? resumePdf : `#${itemKey}`;

              return (
                <a
                  key={item}
                  ref={(el) => (navRefs.current[itemKey] = el)}
                  href={href}
                  target={isResume ? '_blank' : undefined}
                  rel={isResume ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (isResume) {
                      return;
                    }
                    e.preventDefault();
                    navigateTo(itemKey);
                  }}
                  style={{
                    color: isActive ? THEME.accent : THEME.text,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    fontWeight: isActive ? '500' : '400',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = THEME.blue;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = THEME.text;
                    }
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
