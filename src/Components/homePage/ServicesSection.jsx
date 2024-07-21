import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

function ServicesSection() {
  const services = [
    { icon: 'muscle.png', title: 'BUILDING BODY', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' },
    { icon: 'fitness.png', title: 'FITNESS TRACK', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' },
    { icon: 'lifting.png', title: 'WEIGHT LIFTING', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' },
    { icon: 'yoga.png', title: 'YOGA MEDIDATION', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' },
    { icon: 'cycling.png', title: 'CYCLING', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' },
    { icon: 'fit.png', title: 'FITNESS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.' }
  ];

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
      <div className={styles.titleUnderline} />
      <p className={styles.sectionDescription}>
        We offer more than 35 group exercis, aerobic classes each week.
      </p>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;