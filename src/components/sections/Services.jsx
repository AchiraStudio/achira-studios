import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">Solusi digital lengkap untuk kebutuhan bisnis Anda</p>
        </div>

        <div className="services-grid">
          {siteConfig.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;