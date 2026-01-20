import React from 'react';
import { ArrowUp, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Area */}
          <div className="footer-brand">
            <h2>{siteConfig.brand.name}</h2>
            <p className="footer-tagline">
              Refining the web, one pixel at a time. <br />
              Bogor, Indonesia.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <div className="link-group">
              <h4>Sitemap</h4>
              <ul>
                {siteConfig.navigation.map((item, idx) => (
                  <li key={idx}><a href={item.href}>{item.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Socials</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="back-top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;