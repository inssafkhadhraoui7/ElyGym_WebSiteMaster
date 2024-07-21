import React from 'react';
import Header from '../Components/Header';
import BlogHero from '../Components/blogsPage/BlogHero';
import CategoryTags from '../Components/blogsPage/CategoryTags'; import BlogPosts from '../Components/blogsPage/BlogPosts';
import Footer from '../Components/Footer';
import styles from './Blog.module.css';

function Blog() {
  return (
    <div className={styles.blogArticle}>
      <Header />
      <main>
      <img src="bgimage.png" alt="Gym background" className={styles.heroBackground} />
        <BlogHero />
        <CategoryTags />
       <BlogPosts />
       
      </main>
      <Footer />
    </div>
  );
}

export default Blog;