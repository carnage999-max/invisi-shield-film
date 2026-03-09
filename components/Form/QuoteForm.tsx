'use client';

import React, { useState } from 'react';
import styles from './QuoteForm.module.css';
import { Button } from '@/components/Button/Button';

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    application: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', organisation: '', application: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send quote request. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full Name <span>*</span></label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email Address <span>*</span></label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone Number</label>
          <input
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="organisation">Organisation / Company</label>
          <input
            className={styles.input}
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="e.g. Dept of Defense"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="application">Primary Application</label>
        <select
          className={styles.select}
          id="application"
          name="application"
          value={formData.application}
          onChange={handleChange}
        >
          <option value="">Select an application type</option>
          <option value="school">School / Campus</option>
          <option value="police">Law Enforcement / Police Vehicles</option>
          <option value="government">Government / Administrative Buildings</option>
          <option value="residential">Residential / Private Home</option>
          <option value="commercial">Commercial / Retail</option>
          <option value="military">Military</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Additional Requirements</label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your specific requirements, protective levels needed, and timeline."
        />
      </div>

      <Button type="submit" disabled={status === 'loading'} className={styles.submitButton}>
        {status === 'loading' ? 'Sending...' : 'Request Protection Quote'}
      </Button>

      {status === 'success' && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          Thank you! Your quote request has been received. We will be in touch shortly.
        </div>
      )}

      {status === 'error' && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          {errorMessage}
        </div>
      )}
    </form>
  );
};
