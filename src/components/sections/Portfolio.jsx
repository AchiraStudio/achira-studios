import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Karya <span>Terbaru</span></h2>
          <p>Beberapa proyek yang telah kami selesaikan</p>
        </div>

        <div className="portfolio-grid">
          {siteConfig.portfolio.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
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