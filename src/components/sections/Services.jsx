import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Layanan <span>Kami</span></h2>
          <p>Solusi digital lengkap untuk kebutuhan bisnis Anda</p>
        </div>

        <div className="services-grid">
          {siteConfig.services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-us">
          <h3>Kenapa Memilih AchiraStudios?</h3>
          <div className="tags">
            {siteConfig.whyUs.map((item, index) => (
              <span key={index} className="tag">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;