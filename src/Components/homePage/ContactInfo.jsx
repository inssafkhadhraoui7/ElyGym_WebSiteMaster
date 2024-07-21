import React from 'react';
import styles from './ContactInfo.module.css'; // Note the change to .module.css

const contactItems = [
  { icon: "phone.png", text: "+216 26 082 939", alt: "Phone icon" },
  { icon: "position.png", text: "Washington 6036 Richmond hwy., Alexandria, VA USA 22303", alt: "Location icon" },
  { icon: "mail.png", text: "Insafkhad1@gmail.com", alt: "Email icon" }
];

function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
      
      {contactItems.map((item, index) => (
        <div key={index} className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <img src={item.icon} alt={item.alt} className={styles.icon} />
          </div>
          <p className={styles.infoText}>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default ContactInfo;
