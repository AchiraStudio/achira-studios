import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrapper">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">Let's Build <br /><span className="text-blue">Something Great</span></h2>
          <p className="contact-desc">Ready to start your digital journey? Contact us for a free consultation.</p>
          
          <div className="info-list">
            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <span>Bogor, Indonesia</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Achira" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="achira@example.com" required />
          </div>
          <div className="form-group">
            <label>Project Details</label>
            <textarea rows="4" placeholder="Tell us about your idea..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;