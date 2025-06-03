import React from 'react';
import { Link } from 'react-router-dom';
import TechTags from '../TechTags/TechTags';
import './AllProjects.css';

const ProjectRow = ({ year, project, technologies, link }) => {
  // Extract domain name from the link without https:// for cleaner display
  const displayLink = link.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <tr className="project-row">
      <td className="project-year">{year}</td>
      <td className="project-name">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {project}
          <span className="project-name-mobile-arrow">↗</span>
        </a>
      </td>
      <td className="tech-stack">
        <TechTags technologies={technologies} />
      </td>
      {/* <td className="project-link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {displayLink} <span className="arrow-icon">↗</span>
        </a>
      </td> */}
    </tr>
  );
};

const AllProjects = () => {
  const projects = [
    {
      year: '2025',
      project: 'Fashion recommendation system',
      technologies: ['Python', 'Tensorflow', 'OpenCV', 'FastAPI', 'MLflow'],
      link: 'https://github.com/AishlyManglani?tab=stars'
    },
    {
      year: '2025',
      project: 'BookTable',
      technologies: ['Python(FastAPI) ', 'AWS EC2', 'RESTful APIs', 'SQLite', 'Git', 'Scrum'],
      link: 'https://github.com/AishlyManglani?tab=stars'
    },
    {
      year: '2023',
      project: 'Meeting Room Booking System',
      technologies: ['Java', 'SQL', 'HTML/XML', 'CSS', 'MVC Framework'],
      link: 'https://github.com/AishlyManglani/meeting-room-booking-system'
    },
    // {
    //   year: '2023',
    //   project: 'NYCE',
    //   technologies: ['React', 'Python', 'AWS'],
    //   link: 'https://nycanx.com'
    // },
    // {
    //   year: '2022',
    //   project: 'Smart Bus Management System',
    //   technologies: ['MERN Stack', 'Ionic', 'KAIROS API'],
    //   link: 'https://github.com/mukuljeswani'
    // }
  ];

  return (
    <div className="all-projects">
      <div className="project-container">
        <div>
          <Link to="/" className="back-link">
            ← Aishly Manglani
          </Link>
          <h1 className="page-title">All Projects</h1>
        </div>

        <table className="projects-table">
          <thead>
            <tr className="table-header">
              <th className="project-year">Year</th>
              <th className="project-name">Project</th>
              <th className="tech-stack">Built with</th>
              {/* <th className="project-link">Link</th> */}
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <ProjectRow key={index} {...project} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjects;
