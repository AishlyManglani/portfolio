import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <p className="about-desc">
        Full-Stack Software Engineer with a M.S. in Software Engineering from San Jose State University and hands-on industry experience at Cisco Systems. Skilled in React, Python, FastAPI, and RESTful API design, with a proven track record of shipping production features that accelerated key engineering workflows. Coursework and projects span Machine Learning, AI Agents, NLP, and distributed systems with applied work in LLM integration, recommendation engines, and cloud-deployed applications.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <span className="about-card-label">Education</span>
          <h4>M.S. Software Engineering</h4>
          <p>San Jose State University · Aug 2024 – May 2026</p>
          <h4>B.Tech Computer Science</h4>
          <p>Acropolis Institute of Technology · Aug 2019 – May 2023</p>
        </div>
        <div className="about-card">
          <span className="about-card-label">Certifications</span>
          <ul className="about-cert-list">
            <li>CCNA — Cisco Certified Network Associate</li>
            <li>AWS Community Day Volunteer (2×)</li>
            <li>Adobe Student Ambassador</li>
          </ul>
        </div>
      </div>

      <p className="about-desc personal-note">
        Outside of software engineering, I enjoy playing basketball, volunteering at tech and community events, and reading. I also hold a graduate degree in Kathak (Indian classical dance), which has strengthened my discipline, creativity, and commitment to continuous learning.
      </p>
    </div>
  );
};

export default About;
