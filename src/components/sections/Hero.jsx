import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Ambience */}
      <div className="hero-glow glow-blue"></div>
      <div className="hero-glow glow-cyan"></div>

      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="status-pill">
            <span className="dot-pulse"></span> Open for new projects
          </div>
          
          <h1 className="hero-title">
            Digital <span className="outline-text">Evolution</span>
          </h1>
          
          <p className="hero-subtitle">
            We build aesthetic, high-performance interfaces that help local businesses 
            transcend into the digital era.
          </p>

          <div className="hero-btns">
            <a href="#portfolio" className="btn-primary">
              View Work <Globe size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              Capabilities <ArrowDownCircle size={18} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Grid Floor */}
      <div className="grid-floor"></div>
    </section>
  );
};

export default Hero;