// src/components/sections/Portfolio/Portfolio.jsx
import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const DESKTOP_WIDTH = 1440; 

const PortfolioItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef(null);
  
  const projectUrl = item.url || '#';

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        if (containerWidth > 0) {
          setScale(containerWidth / DESKTOP_WIDTH);
        }
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="portfolio-card">
      {/* TOP/LEFT: Seamless Iframe Media */}
      <div className="card-media" ref={wrapperRef}>
        
        {isLoading && (
          <div className="loader-overlay">
            <div className="spinner"></div>
          </div>
        )}
        
        <iframe 
          src={projectUrl} 
          title={item.title}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          allowFullScreen
          // --- THE FIX STARTS HERE ---
          tabIndex="-1" 
          sandbox="allow-scripts allow-same-origin allow-forms allow-presentation"
          // ---------------------------
          className={`seamless-iframe ${isLoading ? 'hidden' : 'visible'}`}
          style={{
            width: `${DESKTOP_WIDTH}px`,
            height: `${100 / scale}%`,
            transform: `scale(${scale})`,
          }}
        ></iframe>

        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="click-overlay"
          aria-label={`Open ${item.title}`}
        ></a>
      </div>

      {/* BOTTOM/RIGHT: Details */}
      <div className="card-details">
        <div className="details-inner">
          <span className="detail-category">{item.category}</span>
          <h3 className="detail-title">{item.title}</h3>
          
          <div className="detail-actions">
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-link"
            >
              <span>Open Live Site</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">Explore my latest web projects.</p>
        </div>
        
        <div className="portfolio-list">
          {siteConfig.portfolio.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;