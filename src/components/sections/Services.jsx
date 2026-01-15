import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="service-card-v2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* The "Power-On" Background Glow */}
      <div className="card-power-glow"></div>
      
      {/* Scanline Animation Effect */}
      <div className="card-scanline"></div>

      <div className="service-content-v2">
        <div className="icon-wrapper-v2">
          <service.icon size={32} strokeWidth={1.5} />
          <div className="icon-platform"></div>
        </div>

        <div className="service-text-v2">
          <h3 className="service-title-v2">
            <span className="service-index">0{index + 1}</span>
            {service.title}
          </h3>
          <p className="service-description-v2">{service.description}</p>
        </div>

        <div className="service-footer-v2">
          <div className="status-indicator">
            <span className="status-dot"></span>
            Ready to Deploy
          </div>
          <div className="corner-accent"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-v2">
      <div className="services-grid-bg"></div>
      
      <div className="container">
        <header className="services-header-v2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="header-label"
          >
            Capabilities
          </motion.div>
          <h2 className="services-h2">
            CORE <span className="outline-text">SERVICES</span>
          </h2>
        </header>

        <div className="services-grid-v2">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;