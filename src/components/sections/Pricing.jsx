import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Paket Harga</h2>
          <p className="section-subtitle">Transparan, tanpa biaya tersembunyi, revisi tanpa batas.</p>
        </div>

        <div className="pricing-grid">
          {siteConfig.pricing.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="badge-popular">Paling Laris</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-desc">{plan.desc}</p>
              
              <ul className="plan-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant={plan.popular ? 'primary' : 'outline'} className="full-width">
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;