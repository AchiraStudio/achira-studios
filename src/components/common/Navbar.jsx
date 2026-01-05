// src/components/common/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-initials">{siteConfig.brand.initials}</span>
          <span className="logo-text">{siteConfig.brand.name}</span>
        </a>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {siteConfig.navigation.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={item.href} 
                className="nav-link" 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;