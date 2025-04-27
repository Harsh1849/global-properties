import React from 'react';
import '../styles/ServicesSection.css';
import offPlan from '../assets/images/off-plan-property-sales.jpg';
import propertyInvestment from '../assets/images/property-investment-consultancy.jpg';
import mortgageFinance from '../assets/images/mortgage-finance-services.jpg';
import luxuryProperty from '../assets/images/luxury-property-sourcing.jpg';
import propertyManagement from '../assets/images/property-management.png';

const services = [
  {
    title: 'Off-plan property sales',
    subtitle: 'Services',
    image: offPlan,
  },
  {
    title: 'Property Investment Consultancy',
    subtitle: 'Services',
    image: propertyInvestment,
  },
  {
    title: 'Mortgage & Finance services',
    subtitle: 'Services',
    image: mortgageFinance,
  },
  {
    title: 'Luxury Property Sourcing',
    subtitle: 'Services',
    image: luxuryProperty,
  },
  {
    title: 'Property Management',
    subtitle: 'Services',
    image: propertyManagement,
  },
];

const ServicesSection = () => (
  <section className="services-section">
    <h2 className="services-title">Our Services</h2>
    <div className="services-grid">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-image-placeholder">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-info">
            <span className="service-subtitle">{service.subtitle}</span>
            <h3 className="service-name">{service.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default ServicesSection; 