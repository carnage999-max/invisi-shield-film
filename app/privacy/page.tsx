import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy - InvisiShield ArmorFilm™',
  description: 'Read the InvisiShield ArmorFilm™ Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: March 9, 2025</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            Welcome to InvisiShield ArmorFilm™ ("Company", "we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for a quote.
          </p>
          <p className={styles.text}>
            Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>We may collect personal information you voluntarily provide to us when you:</p>
          <ul className={styles.list}>
            <li>Submit a quote request form</li>
            <li>Contact us via email, phone, or mail</li>
            <li>Subscribe to our communications</li>
            <li>Request information about our products or installer network</li>
          </ul>
          <p className={styles.text}>
            The personal information we collect may include your name, email address, phone number, organization name, mailing address, and the nature of your protection inquiry.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p className={styles.text}>We use the information we collect to:</p>
          <ul className={styles.list}>
            <li>Process and respond to your quote requests</li>
            <li>Connect you with certified installers in your area</li>
            <li>Send you product information, updates, and promotional materials (where you have consented)</li>
            <li>Improve our website, products, and customer service</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Sharing of Your Information</h2>
          <p className={styles.text}>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except in the following limited circumstances:
          </p>
          <ul className={styles.list}>
            <li><strong>Service Providers:</strong> We may share information with trusted third-party vendors (e.g., email service providers) who assist us in operating our website and conducting our business, subject to confidentiality agreements.</li>
            <li><strong>Certified Installers:</strong> With your explicit consent, we may share your contact information with authorized regional installers to facilitate your protection quote.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information where required to do so by law or in response to valid requests by public authorities.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Data Security</h2>
          <p className={styles.text}>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Retention</h2>
          <p className={styles.text}>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your Rights</h2>
          <p className={styles.text}>Depending on your location and applicable law, you may have the right to:</p>
          <ul className={styles.list}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className={styles.text}>
            To exercise any of these rights, please contact us at <a href="mailto:info@invisishieldfilm.com" className={styles.contactLink}>info@invisishieldfilm.com</a>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
          <p className={styles.text}>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Contact Us</h2>
          <p className={styles.text}>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul className={styles.list}>
            <li>Email: <a href="mailto:info@invisishieldfilm.com" className={styles.contactLink}>info@invisishieldfilm.com</a></li>
            <li>Phone: <a href="tel:207-947-1999" className={styles.contactLink}>207-947-1999</a></li>
            <li>Mail: PO Box 52, Detroit, ME 04929</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
