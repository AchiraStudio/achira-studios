import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import './Portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title text-4xl font-black mb-4">
            Selected <span className="outline-text">Works</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {siteConfig.portfolio.map((item, idx) => (
            <motion.div
              key={item.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveProject(item)}
            >
              <div className="card-image-wrap">
                <div className="card-overlay">
                  <span className="preview-btn"><Play size={16} fill="currentColor" /> Preview</span>
                </div>
                {/* Decorative placeholder pattern */}
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(45deg, #1e293b 25%, #0f172a 25%, #0f172a 50%, #1e293b 50%, #1e293b 75%, #0f172a 75%, #0f172a 100%)',
                  backgroundSize: '20px 20px',
                  opacity: 0.3
                }}></div>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-category">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal-window"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 style={{ fontWeight: 'bold' }}>{activeProject.title}</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    Open New Tab <ExternalLink size={14} />
                  </a>
                  <button onClick={() => setActiveProject(null)} className="modal-close-btn">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="iframe-wrapper">
                <iframe
                  src={activeProject.url}
                  title={activeProject.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; encrypted-media"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;