import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import TechTags from '../TechTags/TechTags';
import { FiDownload } from 'react-icons/fi';
import resumePDF from '../../assets/resume.pdf';
import './Experience.css';
import ciscoImg from '../../assets/images/cisco.jpeg'

const Experience = () => {
  const experiences = [

    {
      title: 'Student Assistant',
      company: 'School of Social Work | San Jose State University',
      location: 'San Jose, California',
      period: 'March 2025 — Present',
      description: '1)Spearheaded the redesign of the Department of Social Work’s website, modernizing its UI/UX and improving accessibility using HTML, CSS, and content management tools. 2) Provided technical support and software troubleshooting for departmental tools and platforms, enhancing operational efficiency and digital literacy across faculty and staff. 3) Streamlined administrative workflows by automating data entry tasks on Microsoft Excel, managing scheduling systems, and supporting event coordination through strong organizational and communication skills.',
      technologies: ['MERN Stack', 'Ionic', 'AWS', 'Razorpay'],
      link: 'https://www.sjsu.edu/socialwork/'
    },
    {
      title: 'Consulting Engineer',
      company: 'Cisco Systems Private Limited',
      location: 'INDIA',
      period: 'AUGUST 2023 — JULY 2024',
      description: [
        '1) Developed front-end for a migration dashboard using React.js along with interactive data visualizations (charts, tables, graphs), improving decision-making and increasing workflow efficiency.',
        '2) Built front-end for a network automation tool using JavaScript and HTML/CSS that reduced manual reporting time, hence enhancing operational accuracy.',
        '3) Collaborated with backend and DevOps teams to integrate automation workflows using REST APIs and Git version control.'
      ],
      technologies: ['React', 'React Native', 'HTML', 'CSS', 'Javascript'],
      image: ciscoImg,
      link: 'https://www.cisco.com/'
    }

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
                <p className="experience-company">{exp.company} • {exp.location}</p>
                <p className="experience-description">{exp.description}</p>
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
          Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
