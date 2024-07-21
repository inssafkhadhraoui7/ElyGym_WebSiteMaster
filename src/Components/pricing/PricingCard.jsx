import React, { useState } from "react";
import styles from './PricingCard.module.css';
import Modal from './Modal'; // Import the Modal component

function PricingCard({ title, price, features, isPopular }) {
  const [showModal, setShowModal] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowModal(true);
  };

  // Function to handle form submission (for demo purposes)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Payment submitted');
    setShowModal(false); // Hide the modal after submission
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`${styles.pricingCard} ${isPopular ? styles.popularCard : ''}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>per month</span>
      </div>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <img src={feature.image} alt={feature.text} className={styles.featureImage} />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className={styles.selectButton} onClick={handleButtonClick}>Select</button>

      {/* Modal component */}
      <Modal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default PricingCard;
