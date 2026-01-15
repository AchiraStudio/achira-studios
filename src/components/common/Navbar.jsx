import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-v7 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-wrapper-v7">
        {/* Architectural Logo */}
        <a href="#home" className="nav-logo-v7">
          <div className="logo-box">
            <span className="logo-glitch">{siteConfig.brand.initials}</span>
            <div className="logo-frame"></div>
          </div>
          <span className="logo-name">{siteConfig.brand.name}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links-v7">
          {siteConfig.navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="nav-link-v7">
                <span className="link-num">0{index + 1}</span>
                <span className="link-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop Only) */}
        <div className="nav-actions-v7">
          <a href="#contact" className="nav-cta-v7">
            <span>Get in touch</span>
            <ArrowRight size={14} />
          </a>
          
          <button className="mobile-toggle-v7" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu-v7"
          >
            <div className="mobile-menu-content">
              {siteConfig.navigation.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="mobile-link-v7"
                >
                  <span className="m-link-num">0{index + 1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;