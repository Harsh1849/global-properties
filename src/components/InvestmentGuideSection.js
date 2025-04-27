import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InvestmentGuideSection.css';

const InvestmentGuideSection = () => {
  return (
    <section className="investment-guide">
      <div className="investment-guide-overlay">
        <div className="container">
          <h2>VIEW THE DUBAI INVESTMENT GUIDE</h2>
          <p className="guide-subtitle">"Your journey to owning premium Dubai real estate starts here"</p>
          <Link to="/investment-guide" className="guide-button">
            Dubai Investment Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuideSection; 