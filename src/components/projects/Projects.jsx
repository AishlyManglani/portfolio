import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { Link } from 'react-router-dom';
import TechTags from '../TechTags/TechTags';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      year: '2026',
      title: 'AI Code Reviewer',
      description: 'LLM-powered VS Code extension integrating live repository context and version-control APIs to analyze code diffs, detect logical defects, and generate structured feedback — reducing pull request review time in internal testing.',
      technologies: ['Python', 'JavaScript', 'LLM Integration', 'REST APIs', 'Git'],
      link: 'https://github.com/mannnada/AI-CodeReviewer/tree/main/AI-CodeReviewer',
      highlight: true,
    },
    {
      year: '2025',
      title: 'Fashion Recommender System',
      description: 'Hybrid recommendation engine combining collaborative filtering with CNN visual embeddings, improving accuracy by 18% over baseline. Deployed real-time inference via FastAPI in Docker with MLflow experiment tracking.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'MLflow'],
      link: 'https://github.com/riship1999/StyloAI_Deep_Learning',
    },
    {
      year: '2025',
      title: 'BookTable',
      description: 'Full-stack restaurant booking platform on AWS EC2 with role-based access control and concurrent authenticated sessions. Automated CI/CD with GitHub Actions enabling zero-downtime deployments.',
      technologies: ['React', 'FastAPI', 'AWS EC2', 'CI/CD', 'SQL'],
      link: 'https://github.com/gopinathsjsu/team-project-2024849-mindbogglers',
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-header">
        <Link to="/allProjects" className="view-all-link">
          View All Projects <span className="arrow-icon">→</span>
        </Link>
      </div>

      <div className="projects-list">
        {featuredProjects.map((project, index) => (
          <ExperienceItem key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`blog-post-link ${project.highlight ? 'featured-project' : ''}`}
            >
              <div className="blog-post-content">
                <div className="blog-details">
                  <div className="project-meta">
                    <p className="blog-year">{project.year}</p>
                    {project.highlight && <span className="featured-badge">Featured</span>}
                  </div>
                  <h3 className="blog-title">
                    {project.title}
                    <span className="arrow-icon">↗</span>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <TechTags technologies={project.technologies} />
                </div>
              </div>
            </a>
          </ExperienceItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
