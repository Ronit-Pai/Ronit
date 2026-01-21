import React from 'react';
import { THEME } from '../constants/theme';
import { ToolCard } from './ToolCard';
import styles from './Toolbox.module.css';

const TOOLS = [
  {
    name: 'Google',
    url: 'https://www.google.com',
    description: 'Googling is an art. Try to find the answer yourself first, rather than using chatgpt.',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Ocean of knowledge, you can learn 90% of the things by yourself for free.',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com',
    description: 'Trust me there is atleast one guy who has solution to your problem here.',
  },
  {
    name: 'VS Code',
    url: 'https://code.visualstudio.com',
    description: 'The best one out there! I use it all the time.',
  },
  {
    name: 'Google Colab',
    url: 'https://colab.research.google.com',
    description: 'Have anything to do with AI/ML this is the place to be.',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com',
    description: 'I use it to design my projects and UI/UX designs.',
  },
  {
    name: 'uiverse.io',
    url: 'https://uiverse.io',
    description: 'Plenty of UI components to choose from.',
  },
  {
    name: 'ReactBits',
    url: 'https://reactbits.dev',
    description: 'A collection of modern React patterns and snippets.',
  },
  {
    name: '21st.dev',
    url: 'https://21st.dev',
    description: 'Very beautiful components , very useful for Frontend Developers.',
  },
];

export function Toolbox() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {/* Heading Section */}
        <div className={styles.header}>
          <h1 className={styles.heading} style={{ color: THEME.text }}>
            Toolbox
          </h1>
          <p className={styles.subheading} style={{ color: THEME.textSecondary }}>
            Tools that power my daily workflow
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {TOOLS.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
