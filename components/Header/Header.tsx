'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Header.module.css';
import { Button } from '@/components/Button/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navData = [
  { label: 'Home', href: '/' },
  {
    label: 'Technology',
    href: '/technology',
    subLinks: [
      { label: 'Multi-layer Structure', href: '/technology#structure' },
      { label: 'Energy Dispersion', href: '/technology#dispersion' },
      { label: 'Shatter Containment', href: '/technology#shatter' },
      { label: 'Optical Clarity', href: '/technology#clarity' },
    ],
  },
  {
    label: 'Applications',
    href: '/applications',
    subLinks: [
      { label: 'Schools', href: '/applications#schools' },
      { label: 'Police', href: '/applications#police' },
      { label: 'Government', href: '/applications#government' },
      { label: 'Residential', href: '/applications#residential' },
      { label: 'Commercial', href: '/applications#commercial' },
      { label: 'Military', href: '/applications#military' },
    ],
  },
  {
    label: 'Product Levels',
    href: '/products',
    subLinks: [
      { label: 'Standard', href: '/products#standard' },
      { label: 'PRO', href: '/products#pro' },
      { label: 'ULTRA', href: '/products#ultra' },
      { label: 'Shadow Tint Series', href: '/products#shadow' },
    ],
  },
  {
    label: 'Testing & Cert',
    href: '/testing',
    subLinks: [
      { label: 'Ballistic Testing', href: '/testing#ballistic' },
      { label: 'Certification', href: '/testing#certification' },
    ],
  },
  { label: 'About', href: '/about' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/invisi-shield-logo.jpg" alt="InvisiShield Logo" width={60} height={60} className={styles.logoImage} />
          <span className={styles.logoText}>InvisiShield™</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navData.map((item) => (
              <li key={item.label} className={styles.navItem}>
                {item.subLinks ? (
                  <Link href={item.href} className={styles.navLink} tabIndex={0}>
                    {item.label} <ChevronDown size={14} />
                  </Link>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}

                {item.subLinks && (
                  <div className={styles.dropdown}>
                    {item.subLinks.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownLink}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Button href="/quote" variant="primary">
            Request Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.backdrop} ${mobileMenuOpen ? styles.open : ''}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.open : ''}`}>
        
        <button className={styles.mobileClose} onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>

        <ul className={styles.mobileNavList}>
          {navData.map((item) => (
            <li key={item.label}>
              {item.subLinks ? (
                <>
                  <div className={styles.mobileNavLinkRow}>
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ flex: 1 }}
                    >
                      {item.label}
                    </Link>
                    <button
                      className={styles.mobileChevronBtn}
                      onClick={() => toggleAccordion(item.label)}
                      aria-label={`Expand ${item.label}`}
                    >
                      <motion.div animate={{ rotate: openAccordions.includes(item.label) ? 180 : 0 }}>
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>
                  <AnimatePresence>
                    {openAccordions.includes(item.label) && (
                      <motion.ul
                        className={styles.mobileSubList}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.subLinks.map((sub) => (
                          <li key={sub.label}>
                            <Link href={sub.href} className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.href} className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li style={{ marginTop: '2rem' }}>
            <Button href="/quote" variant="primary" className={styles.mobileQuoteButton}>
              Request Protection Quote
            </Button>
          </li>
          <li>
            <div className={styles.mobileContactSection}>
              <span className={styles.mobileContactTitle}>Contact Us</span>
              <div className={styles.mobileContactItem}>
                <Mail size={16} className={styles.mobileContactIcon} />
                <a href="mailto:info@invisishieldfilm.com">info@invisishieldfilm.com</a>
              </div>
              <div className={styles.mobileContactItem}>
                <Phone size={16} className={styles.mobileContactIcon} />
                <a href="tel:207-947-1999">207-947-1999</a>
              </div>
              <div className={styles.mobileContactItem}>
                <MapPin size={16} className={styles.mobileContactIcon} />
                <a href="https://maps.google.com/?q=PO+Box+52,+Detroit,+ME+04929" target="_blank" rel="noopener noreferrer">
                  PO Box 52<br/>Detroit, ME 04929
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
