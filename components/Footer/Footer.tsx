import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              InvisiShield™
            </Link>
            <div className={styles.footerImageWrapper}>
               <Image 
                 src="/invisi-shield-armor-film.png" 
                 alt="InvisiShield Armor Film" 
                 width={200} 
                 height={66} 
                 style={{ objectFit: 'contain' }}
               />
            </div>
            <p className={styles.tagline}>
              Next-generation transparent armor technology. We stop bullets. #Clearly.
            </p>
          </div>
          
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <h4 className={styles.linksTitle}>Company</h4>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/testing" className={styles.link}>Testing & Certification</Link>
              <Link href="/technology" className={styles.link}>Technology</Link>
              <Link href="/quote" className={styles.link}>Request a Quote</Link>
            </div>

            <div className={styles.links}>
              <h4 className={styles.linksTitle}>Applications</h4>
              <Link href="/applications#schools" className={styles.link}>Schools</Link>
              <Link href="/applications#police" className={styles.link}>Police Vehicles</Link>
              <Link href="/applications#government" className={styles.link}>Government</Link>
              <Link href="/applications#commercial" className={styles.link}>Commercial</Link>
            </div>

            <div className={styles.links}>
              <h4 className={styles.linksTitle}>Contact</h4>
              <a href="mailto:info@invisishieldfilm.com" className={styles.link}>info@invisishieldfilm.com</a>
              <a href="tel:207-947-1999" className={styles.link}>207-947-1999</a>
              <a href="https://maps.google.com/?q=PO+Box+52,+Detroit,+ME+04929" target="_blank" rel="noopener noreferrer" className={styles.link}>
                PO Box 52<br/>Detroit, ME 04929
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} InvisiShield ArmorFilm™. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
