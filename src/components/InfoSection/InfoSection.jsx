import React from 'react';
import './InfoSection.css';

// Este componente recebe 'props' para ser reutilizável
function InfoSection({ id, title, imageSrc, imageText, paragraphText }) {
  return (
    <section id={id} className="info-section section-card">
      <h2 className="info-title">{title}</h2>
      <div className="info-image-container">
        <img src={imageSrc} alt={title} />
        <h3 className="info-image-text">{imageText}</h3>
      </div>
      <p className="info-paragraph">{paragraphText}</p>
    </section>
  );
}

export default InfoSection;