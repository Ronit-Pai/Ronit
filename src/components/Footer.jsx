import React from 'react';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';
import { FOOTER_MAIN, FOOTER_OTHER } from '../constants/data';
import { THEME } from '../constants/theme';
import resumePdf from '../assets/Resume.pdf';

const SOCIAL_LINKS = [
  { Icon: Mail, href: 'mailto:ronit14pai06@gmail.com', label: 'Email' },
  { Icon: Github, href: 'https://github.com/Ronit-Pai', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/ronit-pai-85370a356/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/ronit.pai', label: 'Instagram' },
];

export function Footer({ setCurrentPage }) {
  const handleNavigation = (item) => {
    const itemKey = item.toLowerCase();

    if (itemKey === 'resume') {
      return;
    }

    if (setCurrentPage) {
      if (itemKey === 'tools') {
        setCurrentPage('tools');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (itemKey === 'work') {
        setCurrentPage('work');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

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

        // If unknown, default to home without scrolling offsets
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${THEME.border}`,
        padding: '3rem 1.5rem',
        marginTop: '4rem',
        background: '#050505',
        width: '100%',
        margin: 0,
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Main Links */}
          <div>
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                color: THEME.accent,
                letterSpacing: '0.05em',
              }}
            >
              MAIN LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FOOTER_MAIN.map((item) => {
                const itemKey = item.toLowerCase();
                const isResume = itemKey === 'resume';
                const href = isResume ? resumePdf : `#${itemKey}`;
                return (
                  <a
                    key={item}
                    href={href}
                    target={isResume ? '_blank' : undefined}
                    rel={isResume ? 'noopener noreferrer' : undefined}
                    style={{
                      color: THEME.textSecondary,
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onClick={(e) => {
                      if (isResume) return;
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                    onMouseEnter={(e) => (e.target.style.color = THEME.accent)}
                    onMouseLeave={(e) => (e.target.style.color = THEME.textSecondary)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Other Links */}
          <div>
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                color: THEME.accent,
                letterSpacing: '0.05em',
              }}
            >
              OTHERS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FOOTER_OTHER.map((item) => {
                const itemKey = item.toLowerCase();
                const isResume = itemKey === 'resume';
                const href = isResume ? resumePdf : `#${itemKey}`;

                return (
                  <a
                    key={item}
                    href={href}
                    target={isResume ? '_blank' : undefined}
                    rel={isResume ? 'noopener noreferrer' : undefined}
                    style={{
                      color: THEME.textSecondary,
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onClick={(e) => {
                      if (isResume) {
                        return;
                      }
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                    onMouseEnter={(e) => (e.target.style.color = THEME.accent)}
                    onMouseLeave={(e) => (e.target.style.color = THEME.textSecondary)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>

          </div>

          {/* Social Links & Copyright */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: `1px solid ${THEME.border}`,
              paddingTop: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p style={{ color: THEME.textSecondary, fontSize: '0.9rem' }}>
              © 2026 Your Name
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {SOCIAL_LINKS.map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: THEME.textSecondary,
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = THEME.accent)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = THEME.textSecondary)
                  }
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
}
