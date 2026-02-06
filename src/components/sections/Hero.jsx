// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="label-pill"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="dot"></span> Open for Commissions
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            DIGITAL <br />
            <motion.span
              className="outline"
              whileHover={{ x: 10, color: "rgba(56, 189, 248, 0.1)" }}
            >
              EVOLUTION
            </motion.span>
          </motion.h1>

          <motion.p className="hero-desc" variants={itemVariants}>
            We engineer high-performance digital experiences that help forward-thinking brands
            transcend the ordinary. Fast, aesthetic, and lethal.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#portfolio"
              className="btn btn-primary hero-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Work <Globe size={20} />
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-secondary hero-btn"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.1)", borderColor: "var(--primary)" }}
              whileTap={{ scale: 0.95 }}
            >
              Capabilities <ArrowDownCircle size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;