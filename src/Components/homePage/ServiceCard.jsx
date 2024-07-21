import React from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.serviceCard}>
      <img src={icon} alt={title} className={styles.serviceIcon} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
}

export default ServiceCard;