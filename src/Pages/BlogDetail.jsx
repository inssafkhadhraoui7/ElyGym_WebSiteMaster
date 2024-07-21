import React from 'react';
import styles from './BlogDetail.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BlogPostCard from '../Components/blogsPage/BlogPostCard';

const BlogDetail = () => {
  const blogCards = [
    {
      image: 'post1.png',
      title: 'Make your fitness Boost with us',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.',
    },
    {
        image: 'post1.png',
        title: 'Make your fitness Boost with us',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.',
      },
      {
        image: 'post1.png',
        title: 'Make your fitness Boost with us',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.',
      }
       
  ];
    const categories = [
    'FITNESS', 'BUILDING BODY', 'FITNESS TRACK', 'WEIGHT LIFTING',
    'YOGA MEDITATION', 'CYCLING', 'CROSS FIT', 'DANCE'
     ];
  return (
    <div className={styles.blogPost}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.articleContainer}>
          <img src="post21.png" alt="Featured blog post image" className={styles.articleImage} />
          <article className={styles.articleContent}>
            <div className={styles.articleMeta}>
              <div className={styles.metaItem}>
                <img src="date.png" alt="Calendar icon" className={styles.metaIcon} />
                <span>March 25, 2019</span>
              </div>
              <div className={styles.metaItem}>
                <img src="icon.png" alt="Author icon" className={styles.metaIcon} />
                <span>John Stain</span>
              </div>
            </div>
            <h1 className={styles.articleTitle}>
              ELY GYM AND FIERCE ARE REVOLUTIONIZING FITNESS AND WELL-BEING IN TUNISIA WITH THEIR UNIQUE PARTNERSHIP
            </h1>
            <p className={styles.articleText}>
              Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed, condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus. Suspendisse fermentum congue dui nec fringilla. Duis volutpat nunc lectus. Suspendisse potenti. Suspendisse egestas venenatis nunc. Donec at laoreet lacus.
            </p>
          </article>
        </div>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>CATEGORY</h2>
          <div className={styles.categoryTags}>
           {categories.map((category, index) => (
            <button key={index} className={styles.categoryTag}>{category}</button>
              ))}
         </div>
        </aside>
      </main>
      <section>
        <h2 className={styles.relatedBlogs}>Related blogs</h2>
        <div className={styles.blogGrid}>
          {blogCards.map((card, index) => (
            <BlogPostCard key={index} {...card} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogDetail;