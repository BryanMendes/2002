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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3em' }}>
              SOM
              <img src="/gif-1.gif" alt="CD animado" style={{ width: '1.2em', height: '1.2em', marginLeft: '0.1em', verticalAlign: 'middle' }} />
            </div>
          </h2>
        </div>
      </div>
      <div className="puro-som-button-wrapper">
        <Link to="/puro-som" className="puro-som-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', padding: 0 }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: 32 }}>&#9654;</span>
        </Link>
      </div>
    </section>
  );
}

export default PuroSomSection;