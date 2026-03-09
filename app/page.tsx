'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button/Button';
import { HoverCard } from '@/components/Card/HoverCard';
import { Shield, Building2, Car, Home, Layers, Maximize } from 'lucide-react';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          poster="/invisi-shield-armor-film.png"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            InvisiShield ArmorFilm™
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            We Stop Bullets. #Clearly.
          </motion.p>
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button href="/quote" variant="primary">
              Request Protection Quote
            </Button>
            <Button href="/technology" variant="secondary">
              Explore The Technology
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Protection Highlights */}
      <section className={`${styles.section} ${styles.darkBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Versatile Life-Saving Protection
            </motion.h2>
            <motion.p
              className={styles.sectionSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ArmorFilm transforms ordinary glass into an invisible shield, tailored for distinct security environments.
            </motion.p>
          </div>
          <div className={styles.highlightsGrid}>
            <HoverCard
              title="Schools"
              description="Protect classrooms and campuses without turning them into fortresses."
              icon={<Shield size={32} />}
            />
            <HoverCard
              title="Police"
              description="Empower law enforcement with transparent armor for patrol vehicles."
              icon={<Car size={32} />}
            />
            <HoverCard
              title="Government"
              description="Fortify courthouses and administrative buildings against ballistic threats."
              icon={<Building2 size={32} />}
            />
            <HoverCard
              title="Residential"
              description="Secure your family's future with elite protection for private homes."
              icon={<Home size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Technology Breakdown */}
      <section className={`${styles.section} ${styles.navyBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Science of Absorption
            </motion.h2>
            <motion.p
              className={styles.sectionSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our multi-layer polymer structure catches projectiles and disperses kinetic energy outward.
            </motion.p>
          </div>

          <div className={styles.layersGrid}>
            <motion.div
              className={styles.layerCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className={styles.layerIconWrapper}><Shield size={32} /></div>
              <h3 className={styles.layerTitle}>Sacrificial Hardcoat</h3>
              <p className={styles.layerDesc}>A scratch-resistant exterior that defends the underlying matrix from weathering and sustains initial blunt-force blows.</p>
            </motion.div>
            
            <motion.div
              className={styles.layerCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.layerIconWrapper}><Layers size={32} /></div>
              <h3 className={styles.layerTitle}>Energy Dispersion Laminate</h3>
              <p className={styles.layerDesc}>A densely woven tensile polymer core that catches projectiles and radically shifts extreme kinetic energy horizontally.</p>
            </motion.div>
            
            <motion.div
              className={styles.layerCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.layerIconWrapper}><Maximize size={32} /></div>
              <h3 className={styles.layerTitle}>Shatter Containment Base</h3>
              <p className={styles.layerDesc}>Military-grade micro-adhesives bond permanently to native glass, locking every shattered fragment safely in its frame.</p>
            </motion.div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button href="/technology" variant="secondary">
              Explore Our Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className={`${styles.section} ${styles.darkBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proof in Action
            </motion.h2>
            <motion.p
              className={styles.sectionSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tested rigorously in certified laboratories. Witness the strength of InvisiShield.
            </motion.p>
          </div>
          
          <div className={styles.galleryGrid}>
            {[
              { src: '/images/military-shooting.png', alt: 'Ballistic Strike Test' },
              { src: '/images/invisi-shield-in-cop-car.png', alt: 'Police Vehicle Armor Simulation' },
              { src: '/images/applying-invisi-shield-on-car-window.png', alt: 'Installation and Window Tension Test' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.galleryImg}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button href="/testing" variant="primary">
              View Testing & Certification
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
