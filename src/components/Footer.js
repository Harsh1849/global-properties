import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/investment-guide">Investment Guide</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Level 5, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Boulevard, Downtown Dubai, United Arab Emirates</p>
          <p>Phone: +971 4 456 4488</p>
          <p>Email: info@abbass.group</p>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe For Updates</h3>
          <p>Subscribe to our newsletter to receive the latest news and updates from our team.</p>

          <div className="subscribe-form">
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </div>
          <div className="social-links">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ABBASS Global Properties L.L.C. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 