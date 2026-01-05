import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3 className="logo-text">{siteConfig.brand.name}</h3>
          <p>{siteConfig.brand.tagline}</p>
          <p className="secondary">{siteConfig.brand.secondaryTagline}</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>WhatsApp: {siteConfig.contact.whatsapp}</p>
          <p>Email: {siteConfig.contact.email}</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{siteConfig.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;