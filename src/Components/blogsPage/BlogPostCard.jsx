import React from 'react';
import styles from './BlogPostCard.module.css';

function BlogPostCard({ image, title, description }) {
  return (
    <article className={styles.blogPostCard}>
      <img src={image} alt={title} className={styles.postImage} />
      <h2 className={styles.postTitle}>{title}</h2>
      <p className={styles.postDescription}>{description}</p>
      <button className={styles.readMoreButton}>- READ MORE -</button>
    </article>
  );
}

export default BlogPostCard;