import React from 'react';
import styles from './GlassCard.module.css';
import { THEME } from '../constants/theme';

export function GlassCard({
  children,
  className = '',
  glow = true,
  ...props
}) {
  return (
    <div
      className={`${styles['glass-card']} ${glow ? styles['with-glow'] : ''} ${className}`}
      style={{
        '--glow-color': THEME.accent,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
