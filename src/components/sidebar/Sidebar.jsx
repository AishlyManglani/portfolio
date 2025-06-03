import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ closeMobileMenu, hideBasicInfoOnMobile }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'
        // , 'blog'
      ];
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
      if (closeMobileMenu) {
        closeMobileMenu();
      }
    }
  };

  return (
    <div className="sidebar">
      {!hideBasicInfoOnMobile && (
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h1>Aishly Manglani</h1>
            <h2>Master's Student</h2>
            <p>I create cutting-edge solutions that enhance web and mobile digital experiences.</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/AishlyManglani" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/aishly-manglani/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      )}

      <nav className={`sidebar-nav ${hideBasicInfoOnMobile ? 'mobile-nav-only' : ''}`}>
        <ul>
          <li
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <div className="nav-line"></div>
            ABOUT
          </li>
          <li
            className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            <div className="nav-line"></div>
            EXPERIENCE
          </li>
          <li
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <div className="nav-line"></div>
            PROJECTS
          </li>
          {/* <li 
            className={`nav-item ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('blog')}
          >
            <div className="nav-line"></div>
            BLOGS
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;