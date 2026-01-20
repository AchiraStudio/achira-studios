import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: 'var(--text-4xl)', fontWeight: '900', marginBottom: '1rem' }}>
            Investment <span className="outline-text">Plans</span>
          </h2>
        </div>

        <div className="pricing-grid">
          {siteConfig.pricing.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`price-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {plan.featured && (
                <div className="featured-badge">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}

              <div className="price-header">
                <h3 className="price-name">{plan.name}</h3>
                <div className="price-value">
                  <span className="price-currency">Rp</span>
                  {plan.price}
                </div>
                <p className="price-desc">{plan.desc}</p>
              </div>

              <ul className="feature-list">
                {plan.features.map((feat, i) => (
                  <li key={i} className="feature-item">
                    <div className="check-circle"><Check size={12} /></div>
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`btn-price ${plan.featured ? 'primary' : 'outline'}`}>
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;