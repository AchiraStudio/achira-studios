// src/components/sections/Hero/Hero.jsx
import React from 'react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';
import './Hero.css';

const Hero = () => {
  const { headline, subheadline, ctaPrimary, ctaSecondary } = siteConfig.hero;

  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Welcome to {siteConfig.brand.name}</div>
          <h1 className="hero-title">{headline}</h1>
          <p className="hero-subtitle">{subheadline}</p>
          <div className="hero-actions">
            <Button href="#pricing">{ctaPrimary}</Button>
            <Button variant="outline" href="#contact">{ctaSecondary}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;