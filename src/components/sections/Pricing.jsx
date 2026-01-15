import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Target, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';
import './Pricing.css';

const PricingCard = ({ plan, index }) => {
  const icons = [Target, Zap, Crown];
  const PlanIcon = icons[index] || Zap;

  const formatPrice = (priceStr) => {
    // 1. Check if it starts with Rp
    const hasRp = priceStr.toLowerCase().includes('rp');
    // 2. The 'body' is everything except the 'Rp'
    const body = priceStr.replace(/rp/i, '').trim();
    
    return { 
      prefix: hasRp ? 'Rp' : '', 
      body: body 
    };
  };

  const { prefix, body } = formatPrice(plan.price);

  return (
    <motion.div 
      className={`pricing-card-v5 ${plan.isPopular ? 'is-popular' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {plan.isPopular && (
        <div className="popular-tag">
          <Sparkles size={12} /> Terpopuler
        </div>
      )}
      
      <div className="card-top">
        <div className="plan-badge">
          <PlanIcon size={16} />
          <span>{plan.name}</span>
        </div>
        
        <div className="price-display">
          {prefix && <span className="price-prefix">{prefix}</span>}
          <h3 className="price-body">{body}</h3>
        </div>
      </div>

      <div className="card-body">
        <ul className="feature-list">
          {plan.features.map((feature, idx) => (
            <li key={idx}>
              <div className="check-box">
                <Check size={12} strokeWidth={3} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <Button 
          variant={plan.isPopular ? 'primary' : 'outline'} 
          href="#contact"
          className="pricing-action-btn"
        >
          Pilih Paket
        </Button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-v5">
      <div className="container">
        <header className="pricing-header-v5">
          <span className="section-label">Investasi</span>
          <h2 className="section-title-v5">
            STRATEGI <span className="outline-text">BIAYA</span>
          </h2>
        </header>

        <div className="pricing-grid-v5">
          {siteConfig.pricing.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;