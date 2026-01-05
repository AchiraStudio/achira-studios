// src/components/sections/Contact/Contact.jsx
import React from 'react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';
import { Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{textAlign: 'left'}}>Siap Memulai?</h2>
          <p className="contact-desc">
            Konsultasikan kebutuhan website bisnis Anda bersama AchiraStudios sekarang.
          </p>
          
          <div className="contact-methods">
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g,'')}`} className="method-item">
              <div className="icon-box"><MessageCircle /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>{siteConfig.contact.whatsapp}</p>
              </div>
            </a>
            
            <a href={`mailto:${siteConfig.contact.email}`} className="method-item">
              <div className="icon-box"><Mail /></div>
              <div>
                <h4>Email</h4>
                <p>{siteConfig.contact.email}</p>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Kirim Pesan</h3>
          <div className="form-group">
            <input type="text" placeholder="Nama Anda" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Ceritakan kebutuhan website Anda..." rows="4" required></textarea>
          </div>
          <Button type="submit" className="btn-full">Kirim Pesan</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;