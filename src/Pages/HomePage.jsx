import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/homePage/HeroSection';
import AboutSection from '../Components/homePage/AboutSection';
import Discover from '../Components/homePage/Discover';
import ServicesSection from '../Components/homePage/ServicesSection';
import AboutUS2 from '../Components/homePage/AboutUS2';
import GallerySection from '../Components/homePage/galleryService';
import ContactSection from '../Components/homePage/contact';
import Footer from '../Components/Footer';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.gymContainer}>
      <Header />
      <main>
      <img src="hero.png" alt="Gym background" className={styles.heroBackground} />
        <HeroSection />
        <AboutSection />
        <Discover />
        <ServicesSection />
        <AboutUS2 />
         <GallerySection />
        <ContactSection /> 
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;