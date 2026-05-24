import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-premium">Capabilities.</h2>
          <p style={{ color: 'var(--text-muted)' }}>What we do best.</p>
        </div>

        <div className="bento-grid">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bento-icon">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;