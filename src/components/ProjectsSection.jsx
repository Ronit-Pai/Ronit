import { ProjectRow } from './ProjectRow';

export function ProjectsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
      <ProjectRow reverse={false} />
      <ProjectRow reverse={true} />
      <ProjectRow reverse={false} />
    </div>
  );
}
