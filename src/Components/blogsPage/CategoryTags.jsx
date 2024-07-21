import React from 'react';
import styles from './CategoryTags.module.css';

function CategoryTags() {
  const categories = [
    'FITNESS', 'BUILDING BODY', 'FITNESS TRACK', 'WEIGHT LIFTING',
    'YOGA MEDITATION', 'CYCLING', 'CROSS FIT', 'DANCE'
  ];

  return (
    <section className={styles.categoryTags}>
      {categories.map((category, index) => (
        <button key={index} className={styles.categoryTag}>{category}</button>
      ))}
    </section>
  );
}

export default CategoryTags;