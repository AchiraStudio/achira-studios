// src/components/sections/Services/Services.jsx
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <h2 className="section-title">Layanan Kami</h2>
        <div className="services-grid">
          {siteConfig.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;