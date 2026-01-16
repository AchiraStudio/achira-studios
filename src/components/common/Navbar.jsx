import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Theme Toggle Logic
  useEffect(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container nav-wrapper">
          {/* Brand */}
          <a href="#home" className="nav-brand">
            <span className="brand-box">{siteConfig.brand.initials}</span>
            <span className="brand-name">{siteConfig.brand.name}</span>
          </a>

          {/* Desktop Menu */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
            
            <div className="nav-actions">
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="#contact" className="nav-cta">
                Let's Talk <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="nav-mobile-controls">
            <button onClick={toggleTheme} className="theme-toggle-mobile">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsMobileOpen(true)} className="menu-toggle">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button onClick={() => setIsMobileOpen(false)} className="close-menu">
              <X size={24} />
            </button>
            <div className="mobile-links-list">
              {siteConfig.navigation.map((item, idx) => (
                <motion.a 
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <a href="#contact" className="mobile-cta-link" onClick={() => setIsMobileOpen(false)}>
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;