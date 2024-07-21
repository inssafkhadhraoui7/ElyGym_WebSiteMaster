import React from "react";
import styles from './Pricing.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PricingCard from '../Components/pricing/PricingCard';

const pricingData = [
    {
      title: "Standard Pack",
      price: "£12",
      features: [
        { text: "Training overview", image: "done.png" },
        { text: "Foundation Training", image: "done.png" },
        { text: "Beginners Classes", image: "close.png" },
        { text: "Olympic Weightlifting", image: "close.png" },
        { text: "Personal Training", image: "close.png" }
      ],
      isPopular: false
    },
    {
      title: "Popular Pro Pack",
      price: "£29",
      features: [
        { text: "Training overview", image: "done.png" },
        { text: "Foundation Training", image: "done.png" },
        { text: "Beginners Classes", image: "done.png" },
        { text: "Olympic Weightlifting", image: "close.png" },
        { text: "Personal Training", image: "close.png" }
      ],
      isPopular: true
    },
    {
      title: "Gold Pack",
      price: "£39",
      features: [
        { text: "Training overview", image: "done.png" },
        { text: "Foundation Training", image: "done.png" },
        { text: "Beginners Classes", image: "done.png" },
        { text: "Olympic Weightlifting", image: "done.png" },
        { text: "Personal Training", image: "done.png" }
      ],
      isPopular: false
    }
  ];
  

function PricingPackage() {
  return (
    <div className={styles.pricingContainer}>
      <Header />
      <h1 className={styles.pricingTitle}>PACKAGE PRICING</h1>
      <p className={styles.pricingSubtitle}>And a subheading describing your pricing plans, too</p>
      <section className={styles.pricingGrid}>
        {pricingData.map((pack, index) => (
          <PricingCard key={index} {...pack} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default PricingPackage;