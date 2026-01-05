import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <div className="contact-info">
          <div className="section-title" style={{textAlign: 'left', marginBottom: '40px'}}>
            <h2>Mulai <span>Proyek</span> Anda</h2>
            <p>Siap membuat bisnis Anda tampil beda? Hubungi kami sekarang.</p>
          </div>
          
          <div className="info-item">
            <h4>WhatsApp</h4>
            <p>{siteConfig.contact.whatsapp}</p>
          </div>
          <div className="info-item">
            <h4>Email</h4>
            <p>{siteConfig.contact.email}</p>
          </div>
          <div className="info-item">
            <h4>Lokasi</h4>
            <p>{siteConfig.contact.address}</p>
          </div>

          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
            className="wa-direct"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glow">Chat via WhatsApp</Button>
          </a>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" required placeholder="Nama Anda" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required placeholder="email@contoh.com" />
            </div>
            <div className="form-group">
              <label>Pesan / Kebutuhan</label>
              <textarea rows="4" required placeholder="Ceritakan tentang proyek Anda..."></textarea>
            </div>
            
            <Button type="submit" variant="primary" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
            
            {formStatus === 'success' && (
              <p className="success-msg">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;