import React from 'react';
import styles from './galleryService.module.css';

function GallerySection() {
  const images = [
    { src: '1.png', alt: 'Fitness class' },
    { src: '2.png', alt: 'Weight lifting' },
    { src: '3.png', alt: 'Cardio area' },
    { src: '4.png', alt: 'Personal training' },
    { src: '5.png', alt: 'Group exercise' },
    { src: '6.png', alt: 'Strength training' },
    { src: '7.png', alt: 'Stretching area' },
    { src: '8.png', alt: 'Locker room' },
    { src: '1.png', alt: 'Fitness class' }
  ];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>OUR GALLERY</h2>
      <p className={styles.galleryDescription}>
        We offer more than 35 group exercis, aerobic classes each week.
      </p>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={styles.galleryImage} />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;