import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>360 Harvest St, North Subract, London. United States Of Amrica.</p>
          <p>Email: info@themevessel.com</p>
          <p>Phone: +1 347-465-0659</p>
        </div>

        <div className="footer-section">
          <h3>Properties Types</h3>
          <ul>
            <li><Link to="/properties/apartment">Apartment</Link></li>
            <li><Link to="/properties/restaurant">Restaurant</Link></li>
            <li><Link to="/properties/my-houses">My Houses</Link></li>
            <li><Link to="/properties/villa-condo">Villa & Condo</Link></li>
            <li><Link to="/properties/family-house">Family House</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/properties">Properties Details</Link></li>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 