import React from 'react';
import styles from './HoverCard.module.css';

interface HoverCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.highlightBar} />
    </div>
  );
};
