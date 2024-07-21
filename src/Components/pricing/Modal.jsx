import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newErrors = {};

    // Basic validation examples
    if (!formData.get('cardNumber').match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card Number must be 16 digits';
    }
    if (!formData.get('expiryDate').match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiryDate = 'Expiry Date must be in MM/YY format';
    }
    if (!formData.get('cvv').match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    if (!formData.get('email').match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.get('zip').match(/^\d{5}$/)) {
      newErrors.zip = 'ZIP Code must be 5 digits';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(event);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.logoContainer}>
          <img src="logo.png" alt="Ely Gym Logo" className={styles.logoImage} />
          <h1 className={styles.logoText}>
            Ely <span className={styles.logoHighlight}>GYM</span>
          </h1>
        </div>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h4>Payment Form</h4>
        <form onSubmit={validateForm}>
          <div className={styles.formGroup}>
            <input type="text" id="cardNumber" name="cardNumber" placeholder='Card Number*' />
            <i className="fas fa-credit-card"></i>
            {errors.cardNumber && <p className={styles.errorText}>{errors.cardNumber}</p>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="expiryDate" name="expiryDate"  placeholder='Expiry Date*' />
            <i className="fas fa-calendar"></i>
            {errors.expiryDate && <p className={styles.errorText}>{errors.expiryDate}</p>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="cvv" name="cvv"  placeholder='CVV*' />
            <i className="fas fa-lock"></i>
            {errors.cvv && <p className={styles.errorText}>{errors.cvv}</p>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="name" name="name" placeholder='Your name*' />
            <i className="fas fa-user"></i>
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="email" name="email" placeholder='Your Email*' />
            <i className="fas fa-envelope"></i>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="address" name="address" placeholder='Address' />
            <i className="fas fa-home"></i>
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="city" name="city"  placeholder='City' />
            <i className="fas fa-city"></i>
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="state" name="state"  placeholder='State*' />
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="zip" name="zip" placeholder='ZIP Code*' />
            <i className="fas fa-envelope"></i>
            {errors.zip && <p className={styles.errorText}>{errors.zip}</p>}
          </div>
          <div className={styles.checkgroub}>
            <input type="checkbox" className={styles.check}required />
            <div className={styles.iHaveA}>
              I have a different legal company name or shipping address
            </div>
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
