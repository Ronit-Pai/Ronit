import React from 'react';
import { THEME } from '../constants/theme';
import { GlassCard } from './GlassCard';
import { TiltedCard } from './TiltedCard';
import { TechStack } from './TechStack';
import profileImg from '../assets/art/profile.jpg';

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
              <img
                src={profileImg}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  border: `2px solid ${THEME.border}`,
                  boxShadow: `inset 0 0 30px ${THEME.accent}20`,
                  opacity: 1,
                }}
              />
            </TiltedCard>
          </div>

          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              I'm <span style={{ color: THEME.accent }}>Ronit Pai</span>
            </h1>
            <p
              style={{
                fontSize: '1.3rem',
                color: THEME.blue,
                marginBottom: '0.5rem',
                fontWeight: '600',
              }}
            >
              <img 
                src="https://readme-typing-svg.herokuapp.com?font=Montserrat&size=22&duration=3000&pause=1000&color=D4AF37&center=false&vCenter=true&width=400&lines=I+Code;I+Draw;I+Design;I+Game" 
                alt="Typing SVG"
                style={{
                  filter: `drop-shadow(0 0 8px ${THEME.accent}80)`,
                }}
              />
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: THEME.textSecondary,
                lineHeight: '1.8',
                marginBottom: '0',
              }}
            >
              I'm a passionate Frontend Developer with a keen interest in AI/ML. I combine technical expertise with creative thinking to build
              products that make a real impact. Apart from coding I enjoy drawing , watching movies/webseries and mainly gaming!!
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
                B.Tech. Computer Science
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
                Karkala Jnanasudha P.U. College
              </p>
              <p
                style={{
                  color: THEME.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                Strong foundation in physics, chemistry, mathematics and Statistics that fueled my passion
                for technology and Data Science.
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
                Dr. N.S.A.M English Medium High School
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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
            }}
          >
            <h3
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: THEME.accent,
                textAlign: 'center',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Coming Soon . . . !?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
