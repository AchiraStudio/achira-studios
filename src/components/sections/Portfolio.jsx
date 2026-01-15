import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const DESKTOP_WIDTH = 1440;

const PortfolioItem = ({ item, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false); // State baru untuk kontrol loading
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null); // Ref untuk observer
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  // FIX: Intersection Observer untuk mencegah auto-focus/auto-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true); // Mulai muat iframe hanya saat kartu terlihat 10%
          observer.disconnect(); // Berhenti mengamati setelah dimuat
        }
      },
      { threshold: 0.1 } 
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Scaling Logic
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        if (containerWidth > 0) setScale(containerWidth / DESKTOP_WIDTH);
      }
    });
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.article 
      ref={containerRef} // Pasang ref di sini
      className="portfolio-card-v2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1000 }}
    >
      <div className="card-glass-glow"></div>
      
      <div className="card-media-v2" ref={wrapperRef}>
        {isLoading && (
          <div className="card-loader">
            <div className="shimmer"></div>
          </div>
        )}
        
        {/* Render iframe hanya jika shouldLoad bernilai true */}
        {shouldLoad ? (
          <iframe 
            src={item.url} 
            title={item.title}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            tabIndex="-1" 
            /* Tambahkan sandbox tanpa allow-modals/allow-popups untuk keamanan ekstra */
            sandbox="allow-scripts allow-same-origin allow-forms"
            className={`portfolio-iframe ${isLoading ? 'hidden' : 'visible'}`}
            style={{
              width: `${DESKTOP_WIDTH}px`,
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
            }}
          ></iframe>
        ) : (
          <div className="iframe-placeholder"></div>
        )}
        
        <div className="iframe-guard"></div>
      </div>

      <div className="card-info-v2">
        <div className="info-header">
          <span className="info-cat"><Layers size={12} /> {item.category}</span>
          <h3 className="info-title">
            {item.title.split(' ')[0]} <span className="outline-text">{item.title.split(' ')[1] || ''}</span>
          </h3>
        </div>

        <motion.a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="info-btn"
          whileHover={{ x: 5 }}
        >
          <span>Live Preview</span>
          <ExternalLink size={16} />
        </motion.a>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-v2">
      <div className="bg-grid-fade"></div>
      
      <div className="container">
        <header className="portfolio-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="portfolio-h2"
          >
            SELECTED <span className="outline-text">WORKS</span>
          </motion.h2>
          <p className="portfolio-p">Interfacing the future of the web.</p>
        </header>
        
        <div className="portfolio-grid-v2">
          {siteConfig.portfolio.map((item, idx) => (
            <PortfolioItem key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;