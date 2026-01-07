// src/components/sections/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const PortfolioItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Fallback url if not in config
  const projectUrl = item.url || '#';

  return (
    <article className="portfolio-card">
      {/* LEFT: Seamless Iframe Container */}
      <div className="card-media">
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
          className="seamless-iframe"
        ></iframe>
      </div>

      {/* RIGHT: Minimalist Details */}
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