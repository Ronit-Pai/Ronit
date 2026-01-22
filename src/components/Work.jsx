import { useState } from 'react';
import { THEME } from '../constants/theme';
import { WorkTabs } from './WorkTabs';
import { ProjectsSection } from './ProjectsSection';
import { ArtSection } from './ArtSection';

export function Work() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section
      id="work"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: "'Montserrat', sans-serif" }}>My Work</h2>
        <p style={{ color: THEME.textSecondary, fontSize: '1.15rem', fontFamily: "'Exo 2', sans-serif" }}>
          Projects, experiments, and visual explorations.
        </p>
      </div>

      <WorkTabs active={activeTab} setActive={setActiveTab} />

      <div style={{ marginTop: '4rem' }}>
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'art' && <ArtSection />}
      </div>
    </section>
  );
}
