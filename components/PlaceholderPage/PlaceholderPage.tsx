import React from 'react';
import styles from './PlaceholderPage.module.css';
import { Button } from '@/components/Button/Button';

interface PlaceholderProps {
  title: string;
  subtitle: string;
}

export const PlaceholderPage: React.FC<PlaceholderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Button href="/" variant="secondary">Back to Home</Button>
          <Button href="/quote" variant="primary">Request Quote</Button>
        </div>
      </div>
    </div>
  );
};
