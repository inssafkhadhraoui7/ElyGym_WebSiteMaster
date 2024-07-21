import React from 'react';
import styles from './contact.module.css';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className={styles.contactPage}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>GET IN TOUCH</h1>
        <ContactInfo />
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
