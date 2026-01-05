import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Terima kasih! Pesan Anda telah kami simulasikan terkirim.');
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">Siap Memulai Proyek?</h2>
            <p className="contact-desc">
              Konsultasikan kebutuhan website Anda sekarang. Gratis konsultasi!
            </p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <h3>WhatsApp</h3>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="contact-link">
                  {siteConfig.contact.whatsapp}
                </a>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <a href={`mailto:${siteConfig.contact.email}`} className="contact-link">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Nama Anda" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Alamat Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Ceritakan tentang proyek Anda..." required></textarea>
            </div>
            <Button type="submit" className="full-width">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;