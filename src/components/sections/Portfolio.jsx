import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Layers } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import './Portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-head">
          <h2 className="head-title">Selected <span className="outline-text">Works</span></h2>
        </div>

        <div className="portfolio-grid">
          {siteConfig.portfolio.map((item) => (
            <motion.div 
              key={item.id}
              className="portfolio-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveProject(item)}
            >
              <div className="card-thumb">
                <div className="thumb-overlay">
                  <Play size={32} fill="currentColor" />
                  <span>Live Preview</span>
                </div>
                {/* Abstract CSS Pattern for thumbnail */}
                <div className="abstract-pattern"></div>
              </div>
              <div className="card-meta">
                <span className="meta-cat">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL - Iframe loads only here */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="modal-header">
                <h3>{activeProject.title}</h3>
                <div className="modal-actions">
                  <a href={activeProject.url} target="_blank" rel="noreferrer" className="modal-link">
                    Open New Tab <ExternalLink size={14} />
                  </a>
                  <button onClick={() => setActiveProject(null)} className="modal-close">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="iframe-container">
                <div className="loader">Loading Live Site...</div>
                <iframe 
                  src={activeProject.url} 
                  title={activeProject.title}
                  className="live-iframe"
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