import React from 'react';
import './Values.css';

const Values = () => {
  const values = [
    {
      id: 1,
      icon: '/images/values/handshake.svg',
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability'
    },
    {
      id: 2,
      icon: '/images/values/award.svg',
      title: 'Excellence',
      description: 'Delivering exceptional service and results in everything we do'
    },
    {
      id: 3,
      icon: '/images/values/target.svg',
      title: 'Commitment',
      description: 'Dedicated to achieving the best outcomes for our clients'
    },
    {
      id: 4,
      icon: '/images/values/clock.svg',
      title: 'Convenience',
      description: 'Making real estate simple and accessible for everyone'
    },
    {
      id: 5,
      icon: '/images/values/star.svg',
      title: 'Expertise',
      description: 'Bringing years of experience and market knowledge'
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide us in delivering exceptional real estate services</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              className="value-card" 
              key={value.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon">
                <img src={value.icon} alt={value.title} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 