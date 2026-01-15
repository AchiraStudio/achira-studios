import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import './WhyChoose.css';

const FeatureCard = ({ item, index }) => {
  const cardRef = useRef(null);
  
  // Mouse tracking for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY }) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card"
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div 
        className="feature-spotlight"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(0, 212, 255, 0.15), transparent 80%)`
          )
        }}
      />

      <div className="feature-content">
        <div className="feature-icon-box">
          <item.icon className="feature-icon" strokeWidth={1.5} />
          <div className="icon-glow"></div>
        </div>
        
        <div className="feature-text">
          <span className="feature-number">0{index + 1}</span>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      </div>

      {/* Subtle Corner Border */}
      <div className="card-border-top"></div>
      <div className="card-border-left"></div>
    </motion.div>
  );
};

const WhyChoose = () => {
  return (
    <section id="why-us" className="why-choose-v2">
      {/* Background Element */}
      <div className="why-bg-gradient"></div>
      
      <div className="container">
        <div className="why-header">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="why-title"
          >
            WHY <span className="outline-text">PARTNER</span> <br /> WITH US?
          </motion.h2>
          <div className="header-line"></div>
        </div>

        <div className="why-grid-v2">
          {siteConfig.whyChoose.map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;