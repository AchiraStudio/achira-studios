import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for high-performance tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for "weighty" feel
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // 3D Tilt - only applied on desktop
  const rotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="hero-kinetic" onMouseMove={handleMouseMove} ref={containerRef}>
      {/* Background Layer: Kinetic Lens Flare */}
      {!isMobile && (
        <motion.div 
          className="kinetic-flare"
          style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        />
      )}

      <div className="hero-container">
        <motion.div 
          style={!isMobile ? { rotateX, rotateY, perspective: 1000 } : {}}
          className="hero-card"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-status"
          >
            <span className="pulse-dot"></span>
            Available for new projects
          </motion.div>

          {/* Main Typography */}
          <h1 className="hero-h1">
            <span className="text-reveal">DIGITAL</span>
            <span className="text-reveal outline">ARCHITECT</span>
          </h1>

          <p className="hero-desc">
            We build high-performance interfaces that bridge the gap between 
            <strong> imagination</strong> and <strong>reality</strong>.
          </p>

          {/* Interactive CTA */}
          <div className="hero-cta-group">
            <motion.a 
              href="#contact"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project <ArrowRight size={18} />
            </motion.a>
            
            <motion.a 
              href="#work"
              className="cta-secondary"
            >
              <Globe size={18} /> View Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Responsive Decorative Elements */}
      <div className="bg-grid"></div>
    </section>
  );
};

export default Hero;