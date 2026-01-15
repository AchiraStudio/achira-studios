import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Globe, ArrowUpRight } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-v6">
      {/* Blueprint Grid Background */}
      <div className="contact-grid-pattern"></div>
      
      <div className="container contact-wrapper-v6">
        {/* Left Side: The Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-narrative"
        >
          <div className="status-badge">
            <span className="status-ping"></span>
            Available for Q1 2024 Projects
          </div>
          
          <h2 className="contact-h2">
            READY TO <br />
            <span className="outline-text">CREATE?</span>
          </h2>
          
          <p className="contact-p">
            Konsultasikan visi digital Anda. Kami membantu mengubah ide kompleks menjadi 
            antarmuka yang berperforma tinggi.
          </p>

          <div className="tactile-methods">
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g,'')}`} className="tactile-card">
              <div className="tactile-icon"><MessageCircle size={20} /></div>
              <div className="tactile-info">
                <span>WhatsApp</span>
                <p>{siteConfig.contact.whatsapp}</p>
              </div>
              <ArrowUpRight className="tactile-arrow" size={16} />
            </a>

            <a href={`mailto:${siteConfig.contact.email}`} className="tactile-card">
              <div className="tactile-icon"><Mail size={20} /></div>
              <div className="tactile-info">
                <span>Email</span>
                <p>{siteConfig.contact.email}</p>
              </div>
              <ArrowUpRight className="tactile-arrow" size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: The Terminal Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-terminal"
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="terminal-label">NEW_PROJECT_BRIEF.EXE</div>
          </div>

          <form className="terminal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
              <label>01. FULL NAME</label>
              <input type="text" placeholder="Enter your name..." required />
              <div className="input-focus-line"></div>
            </div>

            <div className="input-field">
              <label>02. EMAIL ADDRESS</label>
              <input type="email" placeholder="email@example.com" required />
              <div className="input-focus-line"></div>
            </div>

            <div className="input-field">
              <label>03. PROJECT BRIEF</label>
              <textarea placeholder="Describe your vision..." rows="4" required></textarea>
              <div className="input-focus-line"></div>
            </div>

            <button type="submit" className="terminal-submit">
              <span>INITIALIZE MESSAGE</span>
              <Send size={18} />
              <div className="btn-glitch-effect"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;