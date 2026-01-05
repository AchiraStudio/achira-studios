// src/components/sections/Pricing/Pricing.jsx
import React from 'react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section-padding">
      <div className="container">
        <h2 className="section-title">Paket Harga</h2>
        <div className="pricing-grid">
          {siteConfig.pricing.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Best Value</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pricing-footer">
                <Button 
                  variant={plan.isPopular ? 'primary' : 'outline'} 
                  href="#contact"
                  className="btn-full"
                >
                  Pilih Paket
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;