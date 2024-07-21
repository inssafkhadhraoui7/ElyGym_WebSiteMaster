import React, { useState } from 'react';
import styles from './Header.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'PRICING', path: '/pricing' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="logo.png" alt="Ely Gym Logo" className={styles.logoImage} />
        <h1 className={styles.logoText}>
          Ely <span className={styles.logoHighlight}>GYM</span>
        </h1>
      </div>
      <div className={styles.mobileMenuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`${styles.navigation} ${menuOpen ? 'show' : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a href={item.path} className={styles.navLink}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.authContainer}>
        <i className="fas fa-user" title="User" style={{ color: '#77A83A' }}></i>
        <i className="fas fa-heart" title="Favorites" style={{ color: '#77A83A' }}></i>
      </div>
    </header>
  );
}

export default Header;
