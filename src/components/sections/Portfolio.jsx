import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Portfolio Terbaru</h2>
          <p className="section-subtitle">Karya yang telah kami bangun untuk klien</p>
        </div>

        <div className="portfolio-grid">
          {siteConfig.portfolio.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
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