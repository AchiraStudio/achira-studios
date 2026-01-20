import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig.js';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="head-title">Our <span className="text-gradient">Craft</span></h2>
            <div className="head-line"></div>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '300px', textAlign: 'right' }}>
            Comprehensive digital solutions tailored for scalablity and impact.
          </p>
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
                <service.icon size={64} strokeWidth={1} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;