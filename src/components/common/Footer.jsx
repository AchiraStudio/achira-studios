import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { Instagram, Linkedin, Twitter, ArrowUp, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-v8">
      <div className="footer-grid-bg"></div>
      
      <div className="container">
        <div className="footer-top-v8">
          {/* Brand Section */}
          <div className="footer-brand-v8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="footer-logo-big"
            >
              {siteConfig.brand.name.split(' ')[0]} 
              <span className="outline-text">
                {siteConfig.brand.name.split(' ')[1] || 'STUDIO'}
              </span>
            </motion.h2>
            <p className="footer-tagline">{siteConfig.brand.subTagline}</p>
          </div>

          {/* Quick Links with Indices */}
          <div className="footer-nav-v8">
            <span className="footer-label">Navigation</span>
            <ul className="footer-links-list">
              {siteConfig.navigation.map((nav, idx) => (
                <li key={idx}>
                  <a href={nav.href}>
                    <span className="link-idx">0{idx + 1}</span>
                    <span className="link-label">{nav.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials as Tactile Buttons */}
          <div className="footer-social-v8">
            <span className="footer-label">Connect</span>
            <div className="social-grid-v8">
              <a href="#" className="social-tile"><Instagram size={18} /></a>
              <a href="#" className="social-tile"><Linkedin size={18} /></a>
              <a href="#" className="social-tile"><Twitter size={18} /></a>
              <a href="#" className="social-tile"><Github size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-v8">
          <div className="footer-copyright">
            <span className="status-indicator-small"></span>
            <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. Built for Performance.</p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop}>
            <span>BACK TO TOP</span>
            <div className="back-to-top-icon">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;