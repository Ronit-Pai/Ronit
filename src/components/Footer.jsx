import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { FOOTER_MAIN, FOOTER_OTHER } from '../constants/data';
import { THEME } from '../constants/theme';

const SOCIAL_ICONS = [Mail, Github, Twitter, Linkedin];

export function Footer() {
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
              {FOOTER_MAIN.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: THEME.textSecondary,
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = THEME.accent)}
                  onMouseLeave={(e) => (e.target.style.color = THEME.textSecondary)}
                >
                  {item}
                </a>
              ))}
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
              {FOOTER_OTHER.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: THEME.textSecondary,
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = THEME.accent)}
                  onMouseLeave={(e) => (e.target.style.color = THEME.textSecondary)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Guestbook */}
          <div
            style={{
              background: THEME.surface,
              border: `1px solid ${THEME.border}`,
              borderRadius: '1rem',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = THEME.accent;
              e.currentTarget.style.boxShadow = `0 5px 15px ${THEME.accent}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = THEME.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Hi! Thanks for visiting my site.
            </h3>
            <p style={{ color: THEME.textSecondary, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Sign my{' '}
              <a
                href="#"
                style={{
                  color: THEME.blue,
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Guestbook
              </a>{' '}
              and let me know what you think.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                style={{
                  background: 'transparent',
                  border: `1px solid ${THEME.border}`,
                  color: THEME.text,
                  padding: '0.5rem 1rem',
                  borderRadius: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = THEME.accent;
                  e.currentTarget.style.color = THEME.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = THEME.border;
                  e.currentTarget.style.color = THEME.text;
                }}
              >
                RSS
              </button>
              <button
                style={{
                  background: 'transparent',
                  border: `1px solid ${THEME.border}`,
                  color: THEME.text,
                  padding: '0.5rem 1rem',
                  borderRadius: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = THEME.accent;
                  e.currentTarget.style.color = THEME.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = THEME.border;
                  e.currentTarget.style.color = THEME.text;
                }}
              >
                Sitemap
              </button>
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
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
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
