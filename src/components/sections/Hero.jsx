import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-pill">
            <span style={{ color: 'var(--primary)' }}>●</span> Studio is taking new clients
          </div>
          
          <h1 className="hero-title heading-premium text-gradient">
            We build digital <br />
            experiences that matter.
          </h1>
          
          <p className="hero-desc">
            Precision-engineered web applications and digital assets designed for performance, scalability, and aesthetic perfection.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;