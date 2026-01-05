// src/components/common/Footer/Footer.jsx
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>{siteConfig.brand.name}</h2>
          <p>{siteConfig.brand.subTagline}</p>
        </div>
        
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            {siteConfig.navigation.map((nav, idx) => (
              <li key={idx}><a href={nav.href}>{nav.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;