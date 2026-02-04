import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { THEME } from '../constants/theme';

export function Projects({ setCurrentPage }) {
  return (
    <section
      id="work"
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
              <div style={{ width: '100%', height: '200px', marginBottom: '1rem', overflow: 'hidden', borderRadius: '0.5rem' }}>
                {typeof project.image === 'string' && project.image.length <= 2 ? (
                  // Handle emoji images
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                      background: THEME.surface,
                    }}
                  >
                    {project.image}
                  </div>
                ) : (
                  // Handle actual image files
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
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
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                }}
              >
                {project.description}
              </p>
              {project.tech && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: `${THEME.accent}15`,
                        border: `1px solid ${THEME.accent}40`,
                        color: THEME.accent,
                        fontSize: '0.75rem',
                        fontWeight: '500',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      {
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
                        textDecoration: 'none',
                      }
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${THEME.accent}15`;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ExternalLink size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      {
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
                        textDecoration: 'none',
                      }
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${THEME.accent}15`;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
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
            onClick={() => setCurrentPage('work')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 10px 20px ${THEME.accent}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Check out more projects →
          </button>
        </div>
      </div>
    </section>
  );
}
