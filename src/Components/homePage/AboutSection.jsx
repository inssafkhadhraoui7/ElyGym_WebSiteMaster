import React from 'react';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src="about.png" alt="Gym equipment" className={styles.gymImage} />
        <div className={styles.contentContainer}>
          <h2 className={styles.aboutTitle}>
            WE'VE SKILL IN 
            <br/><span className={styles.highlightText}>WIDE RANGE</span> OF FITNESS AND OTHER<br/>
            BODY HEALTH FACILITY.
          </h2>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/>
            Aenean commodo ligula eget dolor. Aenean massa.<br/>
             Cum sociis Theme natoque penatibus et magnis dis parturient montes, <br/>
             nascetur ridiculus mus. Aliquam lorem ante, dapibus in.
          </p>
        </div> 
      </div>
    </section>
  );
}

export default AboutSection;
