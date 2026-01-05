import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>{siteConfig.hero.headline}</h1>
          <p>{siteConfig.hero.subheadline}</p>
          <div className="hero-buttons">
            <Button href="#pricing" variant="primary">
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button href="#contact" variant="secondary">
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="circle-glow"></div>
          <div className="card-visual">
            <span className="logo-large">{siteConfig.brand.logo}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;