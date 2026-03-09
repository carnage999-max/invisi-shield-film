import React from 'react';
import styles from './page.module.css';
import { MapWrapper } from '@/components/Map/MapWrapper';

export const metadata = {
  title: 'Find an Installer - InvisiShield ArmorFilm™',
  description: 'Locate a certified InvisiShield Installer in your region. Our network of experienced professionals guarantees flawless installation and ultimate protection.',
};

export default function InstallersPage() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Installer Network</h1>
        <p className={styles.subtitle}>
          Find certified InvisiShield dealers and installers near you.
        </p>
      </header>
      
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
          <MapWrapper />
        </div>
      </div>
    </div>
  );
}
