import React from 'react';
import styles from './FeatureCard.module.css';

function FeatureCard({ number, title, description }) {
  return (
    <div className={styles.featureCard}>
      <h4 className={styles.featureNumber}>{number}</h4>
      <h5 className={styles.featureTitle}>{title}</h5>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.moreDetails}>
        <div className={styles.detailsLine} />
        <span className={styles.detailsText}>MORE DETAILS</span>
      </div>
    </div>
  );
}

export default FeatureCard;