import React from 'react';
import { Link } from 'react-router-dom';
import './PuroSomSection.css';

function PuroSomSection() {
  return (
    <section className="puro-som-section section-card">
      <div className="puro-som-content-row">
        <div className="puro-som-gif-container">
          <img src="/gif-1.gif" alt="CD animado girando" />
        </div>
        <div className="puro-som-text-container">
          <h2 className="puro-som-title">
            <div>PURO</div>
            <div>SOM.</div>
          </h2>
        </div>
      </div>
      <div className="puro-som-button-wrapper">
        <Link to="/puro-som" className="puro-som-button">SAIBA MAIS</Link>
      </div>
    </section>
  );
}

export default PuroSomSection;