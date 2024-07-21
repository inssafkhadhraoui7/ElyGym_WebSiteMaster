import React from 'react';
import BlogPostCard from './BlogPostCard';
import styles from './BlogPosts.module.css';

function BlogPosts() {
  const posts = [
    {
      image: 'post1.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    },
    {
      image: 'post2.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    },
    {
      image: 'post3.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    },
    {
      image: 'post4.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    },
    {
      image: 'post5.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    },
    {
      image: 'post1.png',
      title: 'Make your fitness Boost with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima.'
    }
  ];

  return (
    <section className={styles.blogPosts}>
      {posts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
        
      ))}
    </section>
  );
}

export default BlogPosts;