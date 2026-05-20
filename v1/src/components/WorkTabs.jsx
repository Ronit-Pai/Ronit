import { THEME } from '../constants/theme';

export function WorkTabs({ active, setActive }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2.5rem',
        borderBottom: `1px solid ${THEME.border}`,
        justifyContent: 'center',
      }}
    >
      <Tab
        label="Projects"
        active={active === 'projects'}
        onClick={() => setActive('projects')}
      />
      <Tab
        label="Art & Photography"
        active={active === 'art'}
        onClick={() => setActive('art')}
      />
    </div>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      onFocus={(e) => e.target.blur()}
      style={{
        background: 'none',
        border: 'none',
        padding: '1rem 0',
        fontSize: '1.2rem',
        fontWeight: '600',
        color: active ? THEME.accent : THEME.textSecondary,
        borderBottom: active ? `3px solid ${THEME.accent}` : '3px solid transparent',
        cursor: 'pointer',
        transition: '0.3s',
        outline: 'none',
      }}
    >
      {label}
    </button>
  );
}
