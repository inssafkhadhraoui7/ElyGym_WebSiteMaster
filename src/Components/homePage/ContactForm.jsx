import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lastName || !firstName || !email || !message) {
      setError('Please complete all fields.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Proceed with form submission
      console.log('Form submitted:', { lastName, firstName, email, message });
    }
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.formIntro}>
        <h2 className={styles.formTitle}>CONTACT US </h2>
        <div className={styles.verticalLine}></div>
        <p className={styles.formDescription}>
        If you have any questions, simply fill out the contact form and we will respond promptly.
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <p className={styles.thankYouNote}>
          We appreciate your interest and will respond promptly.
          </p>
          <p className={styles.followUs}>
          Follow us on social media:
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img src="facebook.png" alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="mailto:rhgrouperif@gmail.com" aria-label="Email">
              <img src="email.png" alt="Email" className={styles.socialIcon} />
            </a>
            <a href="https://www.youtube.com" aria-label="Youtube">
              <img src="youtube.png" alt="Site" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img src="instagram.png" alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.formLabel}>First Name</label>
              <input
                type="text"
                id="lastName"
                className={styles.formInput}
                placeholder="Jane"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.formLabel}>Last Name</label>
              <input
                type="text"
                id="firstName"
                className={styles.formInput}
                placeholder="Smitherton"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>E-mail address</label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="email@janesfakedomain.net"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Your message</label>
            <textarea
              id="message"
              className={styles.formTextarea}
              placeholder="Enter your question or message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
