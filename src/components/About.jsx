import React from 'react';
import { THEME } from '../constants/theme';
import { GlassCard } from './GlassCard';
import { TiltedCard } from './TiltedCard';
import { TechStack } from './TechStack';

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '100%',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* About Me Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '6rem',
          }}
        >
          <div style={{ height: '400px' }}>
            <TiltedCard scale={1.08}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
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
                👨‍💻
              </div>
            </TiltedCard>
          </div>

          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              I'm <span style={{ color: THEME.accent }}>Your Name</span>
            </h1>
            <p
              style={{
                fontSize: '1.3rem',
                color: THEME.blue,
                marginBottom: '1.5rem',
                fontWeight: '600',
              }}
            >
              I do everything Digital
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: THEME.textSecondary,
                lineHeight: '1.8',
                marginBottom: '0',
              }}
            >
              I'm a passionate Full Stack Developer with a keen interest in creating innovative
              digital solutions. I combine technical expertise with creative thinking to build
              products that make a real impact. When I'm not coding, you'll find me exploring new
              technologies and working on exciting side projects.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: '6rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              textAlign: 'center',
              color: THEME.text,
            }}
          >
            Education
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <GlassCard glow={true}>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: THEME.accent,
                  marginBottom: '0.5rem',
                }}
              >
                B.E. Computer Science
              </h3>
              <p
                style={{
                  color: THEME.blue,
                  fontSize: '0.95rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                }}
              >
                NMAMIT, Nitte
              </p>
              <p
                style={{
                  color: THEME.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                Specialized in computer science with focus on full-stack development and modern
                web technologies.
              </p>
            </GlassCard>

            <GlassCard glow={true}>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: THEME.accent,
                  marginBottom: '0.5rem',
                }}
              >
                Pre-University
              </h3>
              <p
                style={{
                  color: THEME.blue,
                  fontSize: '0.95rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                }}
              >
                Science Stream
              </p>
              <p
                style={{
                  color: THEME.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                Strong foundation in physics, chemistry, and mathematics that fueled my passion
                for technology.
              </p>
            </GlassCard>

            <GlassCard glow={true}>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: THEME.accent,
                  marginBottom: '0.5rem',
                }}
              >
                School Education
              </h3>
              <p
                style={{
                  color: THEME.blue,
                  fontSize: '0.95rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                }}
              >
                CBSE Board
              </p>
              <p
                style={{
                  color: THEME.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                Developed problem-solving skills and passion for learning through diverse
                coursework.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Skills Section */}
        <TechStack />

        {/* Important Milestones Section */}
        <div>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              textAlign: 'center',
              color: THEME.text,
            }}
          >
            Important Milestones
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {['🏆 National Hackathon Winner', '🚀 First Production App', '📚 1K+ GitHub Stars', '💼 Freelance Success'].map(
              (milestone) => (
                <GlassCard key={milestone} glow={true}>
                  <div
                    style={{
                      aspectRatio: '16/9',
                      background: `linear-gradient(135deg, ${THEME.accent}20, ${THEME.blue}20)`,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.parentElement.style.boxShadow = `0 0 30px ${THEME.accent}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.parentElement.style.boxShadow = 'none';
                    }}
                  >
                    {milestone.split(' ')[0]}
                  </div>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: THEME.accent,
                      textAlign: 'center',
                    }}
                  >
                    {milestone.split(' ').slice(1).join(' ')}
                  </p>
                </GlassCard>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
