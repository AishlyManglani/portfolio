import React from 'react';
import { Link } from 'react-router-dom';
import TechTags from '../TechTags/TechTags';
import './AllProjects.css';

const ProjectRow = ({ year, project, technologies, link }) => {
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
    </tr>
  );
};

const AllProjects = () => {
  const projects = [
    {
      year: '2026',
      project: 'AI Code Reviewer',
      technologies: ['Python', 'JavaScript', 'LLM Integration', 'REST APIs', 'Git'],
      link: 'https://github.com/mannnada/AI-CodeReviewer/tree/main/AI-CodeReviewer',
    },
    {
      year: '2025',
      project: 'Fashion Recommender System',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'MLflow'],
      link: 'https://github.com/riship1999/StyloAI_Deep_Learning',
    },
    {
      year: '2025',
      project: 'BookTable',
      technologies: ['React', 'FastAPI', 'AWS EC2', 'CI/CD', 'SQL'],
      link: 'https://github.com/gopinathsjsu/team-project-2024849-mindbogglers',
    },
    {
      year: '2023',
      project: 'Meeting Room Booking System',
      technologies: ['Java', 'SQL', 'HTML/CSS', 'MVC Framework'],
      link: 'https://github.com/AishlyManglani/meeting-room-booking-system',
    },
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
