import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-head centered">
          <h2 className="head-title">Investment <span className="outline-text">Plans</span></h2>
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
                <h3>{plan.name}</h3>
                <div className="price-amount">
                  <span className="currency">Rp</span>
                  {plan.price}
                </div>
                <p>{plan.desc}</p>
              </div>

              <ul className="price-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <Check size={16} className="check-icon" /> {feat}
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