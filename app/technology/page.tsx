import React from 'react';
import Image from 'next/image';
import { Layers } from 'lucide-react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Technology - InvisiShield ArmorFilm™',
  description: 'Discover the science and layers behind our advanced ballistic-resistant film.',
};

export default function TechnologyPage() {
  const techSections = [
    {
      id: 'structure',
      title: 'Multi-layer Structure',
      description: 'Unlike single-layer films, InvisiShield employs a proprietary stack of nano-laminates. It binds a sacrificial hardcoat over a dense core, enabling it to catch extreme-velocity masses as an integrated net rather than a rigid pane.',
      image: '/invisi-shield-armor-film.png',
      features: [
        'Proprietary nano-laminate construction.',
        'Extremely durable scratch-resistant top layer.',
        'Tensile core capable of dramatic physical stretching.',
        'Invisible, powerful micro-adhesives bond permanently.'
      ]
    },
    {
      id: 'dispersion',
      title: 'Energy Dispersion',
      description: 'When a kinetic object strikes, InvisiShield does not fight the force with pure rigidity. Instead, the polymer matrix ripples, forcing the ballistic energy horizontally across the entire surface of the pane, eliminating the focal point of the break.',
      image: '/images/military-shooting.png',
      features: [
        'Transfers energy horizontally rather than perpendicularly.',
        'Slows down extreme velocities within milliseconds.',
        'Dramatically lowers impact vibration.',
        'Prevents catastrophic localized failure.'
      ]
    },
    {
      id: 'shatter',
      title: 'Shatter Containment',
      description: 'Even when the underlying glass fragments, our film acts as an unbreakable skin. It holds every shard of broken glass securely in place. The window structurally survives the impact and continues to provide an impenetrable physical barrier.',
      image: '/images/applying-invisi-shield-on-car-window.png',
      features: [
        'Locks shattered glass in its frame.',
        'Prevents dangerous spall and secondary fragmentation.',
        'Survives repeated strikes in the same zone.',
        'Responds reliably to bomb blasts and extreme weather.'
      ]
    },
    {
      id: 'clarity',
      title: 'Optical Clarity',
      description: 'Armor should not obscure your vision. We engineered InvisiShield with ultra-clear polymers that are nearly invisible to the naked eye. It looks like standard window glazing while operating like a transparent steel wall.',
      image: '/images/invisi-shield-in-home.png',
      features: [
        '100% flawless light transmission.',
        'Does not yellow, peel or blister over time.',
        'Deflects 99% of harmful UV rays.',
        'Maintains exact architectural aesthetics.'
      ]
    }
  ];

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>The Science of Invisibility</h1>
        <p className={styles.subtitle}>
          Explore the advanced physics behind InvisiShield. Defeating extreme kinetic forces while maintaining absolute structural clarity.
        </p>
      </header>
      
      {techSections.map((tech) => (
        <section key={tech.id} id={tech.id} className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{tech.title}</h2>
              <p className={styles.description}>{tech.description}</p>
              
              <ul className={styles.featuresList}>
                {tech.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Layers className={styles.icon} size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.actions}>
                <Button href="/testing" variant="primary">View Test Results</Button>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image 
                src={tech.image} 
                alt={`${tech.title}`} 
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
