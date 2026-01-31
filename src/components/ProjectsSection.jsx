import { ProjectRow } from './ProjectRow';
import { THEME } from '../constants/theme';

export function ProjectsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
      <ProjectRow reverse={false} />
      <ProjectRow reverse={true} />
      <ProjectRow reverse={false} />
      
      {/* Checkout more projects button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://github.com/Ronit-Pai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: THEME.accent,
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
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
        </a>
      </div>
    </div>
  );
}
