import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-premium">Transparent investment.</h2>
        </div>

        <div className="pricing-grid">
          {siteConfig.pricing.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="pricing-header">
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">Rp {plan.price}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginTop: '0.5rem' }}>
                  {plan.desc}
                </p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <Check size={16} /> {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`btn btn-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;