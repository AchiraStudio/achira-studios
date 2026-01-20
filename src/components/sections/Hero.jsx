import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="label-pill">
            <span className="dot"></span> Open for Commissions
          </div>

          <h1 className="hero-title">
            DIGITAL <br />
            <span className="outline">EVOLUTION</span>
          </h1>

          <p className="hero-desc">
            We engineer high-performance digital experiences that help forward-thinking brands
            transcend the ordinary. Fast, aesthetic, and lethal.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn-primary">
              View Work <Globe size={20} />
            </a>
            <a href="#services" className="btn-secondary">
              Capabilities <ArrowDownCircle size={20} />
            </a>
          </div>
        </motion.div>

        {/* Abstract Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-box"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;