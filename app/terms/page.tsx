import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Terms of Service - InvisiShield ArmorFilm™',
  description: 'Read the InvisiShield ArmorFilm™ Terms of Service governing use of our website and products.',
};

export default function TermsPage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.meta}>Last updated: March 9, 2025</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            By accessing or using the InvisiShield ArmorFilm™ website ("Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not access or use the Site.
          </p>
          <p className={styles.text}>
            These Terms apply to all visitors, users, and others who access or use the Site.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Products and Services</h2>
          <p className={styles.text}>
            InvisiShield ArmorFilm™ manufactures and distributes ballistic-resistant window film products. All product information, specifications, and certifications listed on this Site are provided for informational purposes only.
          </p>
          <p className={styles.text}>
            Product performance characteristics described on this Site represent results obtained under controlled laboratory testing conditions. Real-world performance may vary depending on installation quality, environmental factors, glass substrate, and the nature of the threat.
          </p>
          <p className={styles.text}>
            <strong>InvisiShield ArmorFilm™ products are not a substitute for comprehensive security planning.</strong> We strongly recommend consulting with qualified security professionals when implementing any protection solution.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Quote Requests</h2>
          <p className={styles.text}>
            Quote requests submitted through our website are not binding contracts. Submission of a quote request constitutes an expression of interest only. All quotations provided by InvisiShield ArmorFilm™ or authorized dealers are estimates subject to on-site assessment, material availability, and final written agreement.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
          <p className={styles.text}>
            All content on this Site — including text, graphics, logos, images, and software — is the exclusive property of InvisiShield ArmorFilm™ or its licensors and is protected by applicable intellectual property laws.
          </p>
          <p className={styles.text}>
            You may not reproduce, distribute, modify, transmit, reuse, re-post, or use the content of this Site for public or commercial purposes without the express written permission of InvisiShield ArmorFilm™.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Installer Network</h2>
          <p className={styles.text}>
            Certified installers listed on our Installer Network are independent businesses that have met InvisiShield ArmorFilm™ certification requirements. InvisiShield ArmorFilm™ is not responsible or liable for the acts or omissions of any third-party installer.
          </p>
          <p className={styles.text}>
            Any contracts entered into between you and an installer are solely between those parties. We encourage you to verify installer credentials and obtain multiple quotes before proceeding.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p className={styles.text}>
            To the fullest extent permitted by applicable law, InvisiShield ArmorFilm™ and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of, or inability to use, this Site or our products.
          </p>
          <p className={styles.text}>
            In no event shall our total liability to you for all claims arising from use of the Site exceed the amount paid by you, if any, to access the Site.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Disclaimer of Warranties</h2>
          <p className={styles.text}>
            This Site and its content are provided on an "as is" and "as available" basis without warranty of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Governing Law</h2>
          <p className={styles.text}>
            These Terms shall be governed by and construed in accordance with the laws of the State of Maine, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Kennebec County, Maine.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Changes to Terms</h2>
          <p className={styles.text}>
            We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of significant changes by updating the "Last updated" date at the top of this page. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Contact Us</h2>
          <p className={styles.text}>If you have questions about these Terms, please contact us:</p>
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
