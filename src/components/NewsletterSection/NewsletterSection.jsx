import React from 'react';
import './NewsletterSection.css';

function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <h4>QUER SABER ANTES DE TODO MUNDO?</h4>
      <p>ASSINE NOSSA NEWSLETTER</p>
      <div className="input-wrapper">
        <input type="email" placeholder="" />
      </div>
    </section>
  );
}

export default NewsletterSection;