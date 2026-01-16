import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig.js';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-head">
          <h2 className="head-title">Our <span className="outline-text">Craft</span></h2>
          <div className="head-line"></div>
        </div>

        <div className="services-grid">
          {siteConfig.services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="card-bg-hover"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;