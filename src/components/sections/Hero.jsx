import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            <span className="text-gradient">{siteConfig.hero.headline}</span>
          </h1>
          <p className="hero-subheadline">{siteConfig.hero.subheadline}</p>
          <div className="hero-cta">
            <Button href="#pricing">{siteConfig.hero.cta1}</Button>
            <Button variant="outline" href="#contact">{siteConfig.hero.cta2}</Button>
          </div>
        </div>
        
        {/* Optional Abstract Visual Representation */}
        <div className="hero-visual">
          <div className="card-glow">
            <div className="screen-content">
              <div className="header-line"></div>
              <div className="body-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line short"></div>
              </div>
              <div className="btn-mock"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;