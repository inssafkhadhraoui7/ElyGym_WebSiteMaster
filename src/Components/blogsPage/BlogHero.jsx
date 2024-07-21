import React from 'react';
import styles from './BlogHero.module.css';

function BlogHero() {
  return (
    <section className={styles.blogHero}>
      <div className={styles.heroContent}>
        <div className={styles.breadcrumbs}>
          <span className={styles.breadcrumbItem}>HOME</span>
          <span className={styles.breadcrumbSeparator}>|</span>
          <span className={styles.breadcrumbItem}>OUR BLOG</span>
        </div>
        <h1 className={styles.heroTitle}>BLOG ARTICLE</h1>
        <form className={styles.searchForm}>
          <input type="search" id="searchInput" placeholder="Search" className={styles.searchInput} />
          <button type="submit" className={styles.searchButton}>
            <img src="search.png" alt="Search icon" className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default BlogHero;
