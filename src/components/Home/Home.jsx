import React, { useState, useEffect } from 'react';
import About from '../about/About';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Blog from '../Blog/Blog';
import Sidebar from '../sidebar/Sidebar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuAnimationClass, setMenuAnimationClass] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setMenuAnimationClass('slide-in');
      document.body.style.overflow = 'hidden';
    } else {
      setMenuAnimationClass('slide-out');
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className="home-container"
      onMouseMove={handleMouseMove}
    >
      <ThemeToggle />

      <div
        className="spotlight-effect"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,150,255,0.05), transparent 40%)`
        }}
      />

      {isMobile && (
        <div className="mobile-header-info">
          <h1>Aishly Manglani</h1>
          <h2>Master's Student</h2>
          <p>I build innovative solutions and optimize digital experiences across web and mobile platforms.</p>
          <div className="mobile-social-links">
            <a href="https://github.com/AishlyManglani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aishly-manglani/
" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}

      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {(!isMobile || (isMobile && isMobileMenuOpen)) && (
        <div className={`sidebar-wrapper ${isMobile ? 'mobile-nav-only' : ''} ${menuAnimationClass}`}>
          <Sidebar closeMobileMenu={closeMobileMenu} hideBasicInfoOnMobile={isMobile} />
        </div>
      )}

      <div className="main-content">
        <div className="content-wrapper">
          <section className="content-section" id="about">
            <h2 className="section-heading">About</h2>
            <About />
          </section>

          <section className="content-section" id="experience">
            <h2 className="section-heading">Experience</h2>
            <Experience />
          </section>

          <section className="content-section" id="projects">
            <h2 className="section-heading">Projects</h2>
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;