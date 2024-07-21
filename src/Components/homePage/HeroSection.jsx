import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './HeroSection.module.css';

function HeroSection() {
  const features = [
    {
      number: '01',
      title: 'MODERN EQUIPMENT',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.'
    },
    {
      number: '02',
      title: 'PROFESSIONAL TRAINER',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.'
    },
    {
      number: '03',
      title: 'HEALTHY DIET PLAN',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.'
    }
  ];

  return (
    <section className={styles.heroSection}>
     
      <div className={styles.heroContent}>
        <h2 className={styles.gymTitle}>GYM FITNESS CLUB</h2>
        <h3 className={styles.heroHeadline}>
          STEP UP YOUR <br />
          <span className={styles.highlightText}>FITNESS CHALLENGE WITH US</span>
        </h3>
        <div className={styles.featureCards}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;