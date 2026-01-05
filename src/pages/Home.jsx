// src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChoose from '../components/sections/WhyChoose';
import Portfolio from '../components/sections/Portfolio';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';
import Footer from '../components/common/Footer';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Simple intersection observer for fade-in effect on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('fade-section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;