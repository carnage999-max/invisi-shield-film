import React from 'react';
import styles from './page.module.css';
import { QuoteForm } from '@/components/Form/QuoteForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Request Protection Quote - InvisiShield ArmorFilm™',
  description: 'Get a custom quote for InvisiShield ArmorFilm™ ballistic window protection for your facility or vehicle.',
};

export default function QuotePage() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Secure Your Future</h1>
        <p className={styles.subtitle}>
          Request a comprehensive protection quote. Our experts will analyse your requirements and provide a tailored ArmorFilm solution.
        </p>
      </header>
      
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Why Choose InvisiShield?</h2>
          <p>
            InvisiShield ArmorFilm™ is engineered for extreme environments. Unlike standard security films, our multi-layer polymer structure actively disperses ballistic energy to capture projectiles and prevent catastrophic glass failure.
          </p>
          <p>
            Whether retrofitting a school district, fortifying government buildings, or upgrading police vehicles, our certified installers ensure seamless integration.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <a href="mailto:info@invisishieldfilm.com">info@invisishieldfilm.com</a>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <a href="tel:207-947-1999">207-947-1999</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <a href="https://maps.google.com/?q=PO+Box+52,+Detroit,+ME+04929" target="_blank" rel="noopener noreferrer">
                PO Box 52<br/>Detroit, ME 04929
              </a>
            </div>
          </div>
        </div>

        <div>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
