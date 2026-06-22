import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ closeMobileMenu, hideBasicInfoOnMobile }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (closeMobileMenu) closeMobileMenu();
    }
  };

  return (
    <div className="sidebar">
      {!hideBasicInfoOnMobile && (
        <div className="sidebar-content">
          <div className="sidebar-header">
            <p className="sidebar-greeting">Hi, my name is</p>
            <h1 className="sidebar-name">Aishly Manglani.</h1>
            <h2 className="sidebar-title">I build things for the web.</h2>
            <p className="sidebar-tagline">
              Full-Stack Software Engineer with experience at Cisco Systems. I craft production-ready React frontends, RESTful APIs, and cloud-deployed applications.
            </p>
          </div>

          <div className="social-links">
            <a href="https://github.com/AishlyManglani" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/aishly-manglani/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:aishlymanglani@gmail.com" className="social-link" aria-label="Email">
              <FiMail className="social-icon" />
            </a>
          </div>

          <div className="status-badge">
            <span className="status-dot" />
            Open to opportunities
          </div>
        </div>
      )}

      <nav className={`sidebar-nav ${hideBasicInfoOnMobile ? 'mobile-nav-only' : ''}`}>
        <ul>
          {[
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
          ].map(({ id, label }) => (
            <li
              key={id}
              className={`nav-item ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              <div className="nav-line" />
              {label.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
