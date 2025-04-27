import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/type2_white.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="ABBASS Global Properties" />
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">OUR SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/investment-guide" className="nav-link">INVESTMENT GUIDE</Link>
          </li>
          <li className="nav-item">
            <Link to="/properties" className="nav-link">EXPLORE PROPERTIES</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">BLOGS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 