import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container nav-container">
          {/* Brand */}
          <a href="#home" className="nav-brand">
            <div className="brand-icon">{siteConfig.brand.initials}</div>
            <span>{siteConfig.brand.name}</span>
          </a>

          {/* Desktop Menu */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">{item.name}</a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="nav-cta">
              Let&apos;s Talk <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button onClick={() => setIsMobileOpen(false)} className="mobile-close">
              <X size={32} />
            </button>
            <div className="mobile-nav-links">
              {siteConfig.navigation.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;