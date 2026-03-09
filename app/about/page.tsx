import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us - InvisiShield ArmorFilm™',
  description: 'Learn about the mission, team, and values behind InvisiShield ArmorFilm™ — the world\'s most advanced transparent ballistic protection.',
};

const values = [
  {
    icon: <Shield size={32} />,
    title: 'Uncompromising Protection',
    desc: 'Every product we manufacture is engineered to exceed the minimum — because the people behind the glass deserve nothing less than absolute confidence.'
  },
  {
    icon: <Target size={32} />,
    title: 'Precision Engineering',
    desc: 'Our multi-layer polymer technology is developed through rigorous laboratory research, tested under real-world ballistic and blast conditions.'
  },
  {
    icon: <Users size={32} />,
    title: 'Community-First',
    desc: 'We began protecting schools, houses of worship, and local police departments before expanding globally. Our roots remain in public service.'
  },
  {
    icon: <Award size={32} />,
    title: 'Certified Excellence',
    desc: 'All InvisiShield products are independently verified against UL 752 ballistic ratings and GSA blast mitigation standards. No shortcuts.'
  }
];

export default function AboutPage() {
  return (
    <div className={styles.main}>

      {/* Hero */}
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Who We Are</p>
        <h1 className={styles.title}>Built on One Non-Negotiable</h1>
        <p className={styles.subtitle}>
          We believe the glass separating ordinary people from extraordinary dangers should be stronger than the threat. InvisiShield ArmorFilm™ exists to make that a reality — invisibly.
        </p>
      </header>

      {/* Mission section */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.textBlock}>
            <p className={styles.sectionLabel}>Our Mission</p>
            <h2 className={styles.sectionTitle}>Invisible Armor. Real Protection.</h2>
            <p className={styles.bodyText}>
              InvisiShield ArmorFilm™ was founded with a single mission: make the world a safer place without making it look like a fortress. Traditional ballistic solutions — heavy laminate glass, metal barriers, visible fortifications — come at the cost of environment, dignity, and expense.
            </p>
            <p className={styles.bodyText}>
              We engineered a better answer. A transparent, retrofittable polymer film that transforms existing glass into a ballistic and blast-resistant barrier, indistinguishable from standard glazing. No retrofitting of entire window systems. No institutional aesthetic. Just invisible, reliable protection.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/invisi-shield-in-home.png"
              alt="InvisiShield film installed in a residential home"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <p className={styles.sectionLabel}>Our Values</p>
          <h2 className={styles.sectionTitle}>What We Stand For</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story section */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.imageBox}>
            <Image
              src="/images/invisi-shield-in-school-building.png"
              alt="InvisiShield installed in a school building"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className={styles.textBlock}>
            <p className={styles.sectionLabel}>Our Story</p>
            <h2 className={styles.sectionTitle}>Starting Where It Mattered Most</h2>
            <p className={styles.bodyText}>
              InvisiShield began not in a boardroom, but in response to a question asked by a school principal in rural Maine: <em>"Is there anything we can do about these windows without turning our school into a prison?"</em>
            </p>
            <p className={styles.bodyText}>
              That question drove three years of polymer research, laboratory ballistic testing, and installer network development. Today, InvisiShield products protect schools, government facilities, police vehicles, private residences, and commercial buildings across the country.
            </p>
            <p className={styles.bodyText}>
              We are headquartered in Detroit, Maine — and we are proud to be a small company doing large-scale work for the people who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Protect What Matters?</h2>
        <p className={styles.ctaSubtitle}>Get a custom quote for your facility, vehicle, or residence.</p>
        <div className={styles.ctaButtons}>
          <Button href="/quote" variant="primary">Request a Quote</Button>
          <Button href="/technology" variant="secondary">View The Technology</Button>
        </div>
      </section>

    </div>
  );
}
