import React from 'react';
import '../styles/PartnersSection.css';

const partners = [
  null, null, null,
  null, null, null
];

const PartnersSection = () => (
  <section className="partners-section">
    <div className="container">
      {partners.map((src, i) => (
        <div key={i} className="partner-logo">
          <img src={src} alt={`Partner ${i + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default PartnersSection; 