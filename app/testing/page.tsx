import React from 'react';
import Image from 'next/image';
import { Target } from 'lucide-react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Testing & Certification - InvisiShield ArmorFilm™',
  description: 'View slow-motion impact simulations and certified laboratory ballistic test reports.',
};

export default function TestingPage() {
  const tests = [
    {
      id: 'ballistic',
      title: 'Ballistic Strike Tests',
      description: 'Our film is rigorously subjected to live-fire testing using established military and law enforcement protocols. See how the film mitigates terminal forces across varying calibers without catastrophic glass fragmentation.',
      image: '/images/military-shooting.png',
      features: [
        'Survives repeated high-caliber strikes.',
        'Total kinetic deformation containment.',
        'Slows projectile velocities successfully.',
        'Mitigates dangerous flying glass shards.'
      ]
    },
    {
      id: 'certification',
      title: 'Lab Certification Standards',
      description: 'Engineered to meet and exceed global ballistic and blast mitigation specifications. InvisiShield operates with certified laboratory partners to validate its protective tension rating.',
      image: '/invisi-shield-armor-film.png',
      features: [
        'UL 752 Ballistic Rating assessments.',
        'GSA Blast Mitigation testing protocols.',
        'Extensive accelerated interior/exterior weathering tests.',
        'Independent engineering verification.'
      ]
    }
  ];

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Objective Proof</h1>
        <p className={styles.subtitle}>
          Witness the science in action. InvisiShield is held accountable to the most brutal, methodical laboratory testing scenarios.
        </p>
      </header>
      
      {tests.map((test) => (
        <section key={test.id} id={test.id} className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{test.title}</h2>
              <p className={styles.description}>{test.description}</p>
              
              <ul className={styles.featuresList}>
                {test.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Target className={styles.icon} size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.actions}>
                <Button href="/quote" variant="secondary">Request Reports</Button>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image 
                src={test.image} 
                alt={`${test.title}`} 
                fill 
                className={styles.image} 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
