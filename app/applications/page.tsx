import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Applications - InvisiShield ArmorFilm™',
  description: 'InvisiShield applications spanning Schools, Police Vehicles, Government Buildings, Residential, Commercial, and Military uses.',
};

export default function ApplicationsPage() {
  const applications = [
    {
      id: 'schools',
      title: 'School Security',
      description: 'Transforming classrooms into protected spaces without the appearance of a fortress. Our transparent armor film retrofits existing school windows, providing crucial time and ballistic resistance in emergency scenarios while maintaining a positive learning environment.',
      image: '/images/invisi-shield-in-school-building.png',
      features: [
        'Retrofit existing classroom and entrance glass.',
        'Stops handgun and light rifle rounds.',
        'Prevents glass from shattering into deadly projectiles.',
        'Virtually undetectable, preserving natural light.',
      ]
    },
    {
      id: 'police',
      title: 'Law Enforcement Vehicles',
      description: 'Armoring police vehicles and patrol cars against ambush attacks. InvisiShield allows officers to confidently operate with highly protective, shatter-resistant side and rear windows that do not compromise operational visibility.',
      image: '/images/invisi-shield-in-cop-car.png',
      features: [
        'Enhanced patrol car window defense.',
        'Mitigates ambush damage from various calibers.',
        'Contains spalling to protect officers inside.',
        'Maintains factory-level window clarity.',
      ]
    },
    {
      id: 'government',
      title: 'Government Facilities',
      description: 'Securing administrative centers, courthouses, and municipal buildings. We deliver blast-resistant and bullet-resistant capabilities required by stringent government protection protocols, significantly hardening soft targets.',
      image: '/images/military-shooting.png', // Using military/tactical as proxy for gov/tactical
      features: [
        'Meets specific ballistic testing certifications.',
        'Blast mitigation capabilities (bomb threat).',
        'Cost-effective alternative to full window replacement.',
        'Discreet security solution for historic buildings.'
      ]
    },
    {
      id: 'residential',
      title: 'Residential Protection',
      description: 'Elite home security for peace of mind. InvisiShield protects your family against forced entry, home invasions, and ballistic threats by reinforcing your home’s weakest points: its glass doors and windows.',
      image: '/images/invisi-shield-in-home.png',
      features: [
        'Stops "smash and grab" burglaries.',
        'Defends against armed home invasion.',
        'Blocks 99% of harmful UV rays.',
        'Seamless integration with residential interior design.'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial & Retail',
      description: 'Our film safeguards storefronts, corporate offices, and sensitive retail environments from active threats, vandalism, and rioting, ensuring inventory and personnel remain protected behind unyielding glass.',
      image: '/images/applying-invisi-shield-on-car-window.png', // Proxy application image
      features: [
        'Stores, banks, and high-value retail defense.',
        'Deters looting and violent forced entry.',
        'Reduces liability and disruption of business.',
        'Energy disruption capabilities for impact energy.'
      ]
    },
    {
      id: 'military',
      title: 'Military Vehicles',
      description: 'Providing battlefield resilience and convoy protection. InvisiShield adds a critical layer of spall-control and energy dispersion to thick armored glass, improving durability during extreme kinetic events.',
      image: '/images/military-shooting.png',
      features: [
        'Supplementary armor for heavy tactical vehicles.',
        'Massive spall reduction (prevents internal fragmentation).',
        'Reduces overall vehicle weight vs solid glass alternatives.',
        'Withstands harsh environmental combat conditions.'
      ]
    }
  ];

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Defending Every Front</h1>
        <p className={styles.subtitle}>
          From schools and homes to advanced patrol vehicles and government facilities, InvisiShield adapts to your fundamental security needs with uncompromised clarity and power.
        </p>
      </header>
      
      {applications.map((app) => (
        <section key={app.id} id={app.id} className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{app.title}</h2>
              <p className={styles.description}>{app.description}</p>
              
              <ul className={styles.featuresList}>
                {app.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <CheckCircle2 className={styles.icon} size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.actions}>
                <Button href="/quote" variant="primary">Get a Custom Quote</Button>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image 
                src={app.image} 
                alt={`${app.title} protection`} 
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
