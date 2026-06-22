import React, { useState, useEffect, useRef } from 'react';
import About from '../about/About';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Skills from '../Skills/Skills';
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
  const mainContentRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    if (isMobile) setIsMobileMenuOpen(false);
  };

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <div className="bg-grid" aria-hidden="true" />
      <ThemeToggle />

      <div
        className="spotlight-effect"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-spotlight), transparent 40%)`,
        }}
      />

      {isMobile && (
        <div className="mobile-header-info">
          <p className="mobile-greeting">Hi, I'm</p>
          <h1>Aishly Manglani</h1>
          <h2>Full-Stack Software Engineer</h2>
          <p>I build production-ready web applications, intelligent ML pipelines, and scalable cloud deployments.</p>
          <div className="mobile-social-links">
            <a href="https://github.com/AishlyManglani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aishly-manglani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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

      <div className="main-content" ref={mainContentRef}>
        <div className="content-wrapper">
          <section className="content-section fade-in-section" id="about">
            <div className="section-header">
              <span className="section-number">01.</span>
              <h2 className="section-heading">About</h2>
              <div className="section-line" />
            </div>
            <About />
          </section>

          <section className="content-section fade-in-section" id="experience">
            <div className="section-header">
              <span className="section-number">02.</span>
              <h2 className="section-heading">Experience</h2>
              <div className="section-line" />
            </div>
            <Experience />
          </section>

          <section className="content-section fade-in-section" id="projects">
            <div className="section-header">
              <span className="section-number">03.</span>
              <h2 className="section-heading">Projects</h2>
              <div className="section-line" />
            </div>
            <Projects />
          </section>

          <section className="content-section fade-in-section" id="skills">
            <div className="section-header">
              <span className="section-number">04.</span>
              <h2 className="section-heading">Skills</h2>
              <div className="section-line" />
            </div>
            <Skills />
          </section>
        </div>

        <footer className="site-footer fade-in-section">
          <p>Built with React · Designed & developed by Aishly Manglani</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
