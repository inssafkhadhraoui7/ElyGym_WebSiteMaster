import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const socialIcons = [
    { src: 'facebook (2).png', alt: 'Facebook' },
    { src: 'instagram (2).png', alt: 'Twitter' },
    { src: 'youtube (2).png', alt: 'Instagram' },
    { src: 'gmail.png', alt: 'LinkedIn' }
  ];

  const navItems = ['HOME', 'SERVICES', 'ABOUT', 'BLOG', 'CONTACT'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="logo.png" alt="Ely Gym Logo" className={styles.footerLogoImage} />
          <h2 className={styles.footerLogoText}>
            Ely <span className={styles.footerLogoHighlight}>GYM</span>
          </h2>
        </div>
        <div className={styles.footerDescriptionWrapper}>
          <p className={styles.footerDescription}>
            Thank you for visiting our professional GYM website.
            <br/> Connect with me over socials.
            <br/> Keep Rising 🚀.
            <br/> Thank you!
          </p>
        </div>
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" className={styles.socialIconLink}>
              <img src={icon.src} alt={icon.alt} className={styles.socialIcon} />
            </a>
          ))}
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.footerNavItem}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          Ely Gym © 2024, Designed by <span className={styles.designerName}>INSAF KHADHRAOUI</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
