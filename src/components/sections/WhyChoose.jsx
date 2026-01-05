// src/components/sections/WhyChoose/WhyChoose.jsx
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <section id="why-us" className="why-choose section-padding">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          {siteConfig.whyChoose.map((item) => (
            <div key={item.id} className="why-item">
              <div className="why-icon-wrapper">
                <item.icon className="why-icon" />
              </div>
              <div className="why-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;