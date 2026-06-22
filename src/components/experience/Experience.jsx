import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import TechTags from '../TechTags/TechTags';
import { FiDownload } from 'react-icons/fi';
import resumePDF from '../../assets/images/Aishly_Manglani_Resume.pdf';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Student Assistant',
      company: 'San Jose State University',
      location: 'San Jose, CA',
      period: 'Mar 2025 — May 2026',
      description: [
        'Redesigned the department website (5,000+ monthly users) using a CMS and WCAG 2.1 accessibility standards, reducing usability-related support tickets by 30%.',
        'Automated course scheduling workflows with structured Excel validation templates and rule-based logic, saving 8+ hours of manual coordination per week.',
        'Maintained technical documentation and provided hands-on support for department systems, standardizing knowledge transfer processes.',
      ],
      technologies: ['HTML/CSS', 'CMS', 'WCAG 2.1', 'Excel Automation'],
      link: 'https://www.sjsu.edu/',
    },
    {
      title: 'Software Engineer',
      company: 'Cisco Systems Pvt. Ltd.',
      location: 'Bangalore, India',
      period: 'Sep 2023 — Jul 2024',
      description: [
        'Architected an IPv6 compatibility analysis tool evaluating 100+ enterprise network configurations, cutting migration readiness assessment time by 35%.',
        'Built a component-driven React frontend integrated with REST APIs surfacing real-time bandwidth data for 20+ engineers, reducing coordination overhead by 50%.',
        'Designed RESTful backend services for a resource allocation dashboard with structured validation and centralized error handling, reducing production bugs by 20%.',
        'Partnered cross-functionally with frontend engineers, network architects, and product stakeholders through all phases of the Agile sprint cycle.',
      ],
      technologies: ['React', 'JavaScript', 'REST APIs', 'Python', 'Git'],
      link: 'https://www.cisco.com/',
    },
  ];

  return (
    <div id="experience" className="experience-container">
      <div className="experience-items">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              <div className="experience-content">
                <p className="experience-period">{exp.period}</p>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company} · {exp.location}</p>
                <ul className="experience-bullets">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <TechTags technologies={exp.technologies} />
                <div className="arrow-container">
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            </a>
          </ExperienceItem>
        ))}
      </div>

      <div className="resume-button-container">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <FiDownload className="download-icon" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
