import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-text">{siteConfig.brand.logo}</span>
            <span className="logo-full">{siteConfig.brand.name}</span>
          </div>
          <p className="tagline">{siteConfig.brand.tagline}</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            {siteConfig.nav.map(item => (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>{siteConfig.contact.email}</p>
          <p>WhatsApp: {siteConfig.contact.whatsapp}</p>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;