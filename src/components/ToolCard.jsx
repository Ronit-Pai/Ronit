import React from 'react';
import { GlassCard } from './GlassCard';
import { THEME } from '../constants/theme';
import styles from './ToolCard.module.css';

export function ToolCard({ tool }) {
  return (
    <a
      className={styles.cardLink}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${tool.name} (opens in a new tab)`}
      title={tool.name}
    >
      <GlassCard
        glow
        className={styles.card}
        style={{ borderColor: `${THEME.border}aa` }}
      >
        <div className={styles.title} style={{ color: THEME.text }}>
          {tool.name}
          <span className={styles.arrow}>↗</span>
        </div>

        <p className={styles.desc} style={{ color: THEME.textSecondary }}>
          {tool.description}
        </p>
      </GlassCard>
    </a>
  );
}
