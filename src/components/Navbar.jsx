import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Already on home page, just scroll
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <div className="logo-icon-wrapper">
            <div className="logo-shape-main"></div>
            <div className="logo-shape-accent"></div>
          </div>
          <div className="logo-text-col">
            <span className="logo-text">DATAPEDIA.AI</span>
            <span className="logo-subtext">LETS EXPLORE DATA</span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link to="/" className={`gh-link ${isActive('/') ? 'is-active' : ''}`}>Home</Link>
          <Link to="/about-us" className={`gh-link ${isActive('/about-us') ? 'is-active' : ''}`}>About Us</Link>

          <div className="gh-link gh-dd dropdown">
            <span>Our Agents <span className="gh-chev"></span></span>
            <div className="dropdown-contents">
              <div className="dropdown-row">
                <Link to="/agents/analyst" className="dropdown-item">The Analyst</Link>
                <Link to="/agents/creator" className="dropdown-item">The Creator</Link>
                <Link to="/agents/planner" className="dropdown-item">The Planner</Link>
              </div>
              <div className="dropdown-row">
                <Link to="/agents/prospector" className="dropdown-item">The Prospector</Link>
                <Link to="/agents/whatsapp" className="dropdown-item">The Whatsapp Messenger</Link>
              </div>
            </div>
          </div>

          <a href="/#services" onClick={handleServicesClick} className="gh-link">Services</a>
          <Link to="/case-studies" className={`gh-link ${isActive('/case-studies') ? 'is-active' : ''}`}>Case Studies</Link>
          <Link to="/resources" className={`gh-link ${isActive('/resources') ? 'is-active' : ''}`}>Resources</Link>
        </nav>

        <div className="navbar-action">
          <button
            className="btn-book"
            onClick={() => window.open('https://calendar.app.google/UWRRkZgCUAzc2i9i8', '_blank')}
          >
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
