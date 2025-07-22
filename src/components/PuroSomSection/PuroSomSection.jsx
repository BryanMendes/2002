import React from 'react';
import { Link } from 'react-router-dom';
import './PuroSomSection.css';
import LazyImage from '../LazyImage/LazyImage';

function PuroSomSection() {
  return (
    <section className="puro-som-section section-card">
      <div className="puro-som-row">
        <div className="puro-som-vinyl-container">
          <LazyImage src="/gif-1.gif" alt="CD animado girando" className="puro-som-vinyl" />
        </div>
        <div className="puro-som-text-block">
          <h2 className="puro-som-title-img">
            <span>PURO</span>
            <span>SOM.</span>
          </h2>
        </div>
      </div>
      <div className="puro-som-btn-wrapper">
        <Link to="/puro-som" className="saiba-mais-button">SAIBA MAIS</Link>
      </div>
    </section>
  );
}

export default PuroSomSection;