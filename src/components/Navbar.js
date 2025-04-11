import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="TheNest" />
          THENEST
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">INDEX</Link>
          </li>
          <li className="nav-item">
            <Link to="/properties" className="nav-link">PROPERTIES</Link>
          </li>
          <li className="nav-item">
            <Link to="/agents" className="nav-link">AGENTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/pages" className="nav-link">PAGES</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">BLOG</Link>
          </li>
          <li className="nav-item">
            <Link to="/submit-property" className="nav-link submit-property">SUBMIT PROPERTY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 