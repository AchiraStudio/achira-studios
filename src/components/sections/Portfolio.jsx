// src/components/sections/Portfolio/Portfolio.jsx
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <h2 className="section-title">Featured Works</h2>
        <div className="portfolio-grid">
          {siteConfig.portfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-cat">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;