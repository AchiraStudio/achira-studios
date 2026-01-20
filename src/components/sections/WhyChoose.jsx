import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Zap, Smartphone, TrendingUp, ShieldCheck, Headphones } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './WhyChoose.css';

const iconMap = {
  CircleDollarSign, Zap, Smartphone, TrendingUp, ShieldCheck, Headphones
};

const WhyChoose = () => {
  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="why-header">
          <h2 className="why-title">Why <span className="text-gradient">Partner With Us?</span></h2>
          <p className="why-desc">
            We don&apos;t just build websites; we engineer digital assets that drive growth.
            Precision, speed, and aesthetic excellence.
          </p>
        </div>

        <div className="why-grid">
          {siteConfig.whyChoose.map((item, idx) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <motion.div
                key={item.id}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;