import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Pricing.css';

const Pricing = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Paket <span>Harga</span></h2>
          <p>Transparan, tanpa biaya tersembunyi, revisi unlimited</p>
        </div>

        <div className="pricing-grid">
          {siteConfig.pricing.map((plan, index) => (
            <div className={`pricing-card ${plan.highlight ? 'highlight' : ''}`} key={index}>
              {plan.highlight && <div className="badge">Populer</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price ? <span>{formatPrice(plan.price)}</span> : <span>{plan.priceRange}</span>}
              </div>
              <p className="desc">{plan.desc}</p>
              
              <ul className="features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                href="#contact" 
                variant={plan.highlight ? 'glow' : 'secondary'} 
                className="pricing-btn"
              >
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