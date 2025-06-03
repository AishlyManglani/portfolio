import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { Link } from 'react-router-dom';
import TechTags from '../TechTags/TechTags';
import './Projects.css';

// import taranaImg from '../../assets/images/tarana.png';
// import edukopImg from '../../assets/images/edukop.png';
// import kutubeeImg from '../../assets/images/kutubee.png';
// import nyceImg from '../../assets/images/nyce.png';

const Projects = () => {
  // Using inline base64 images for simplicity
  // const auctionImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Cpath d='M60 80 L90 40 L120 80' stroke='%2364ffda' stroke-width='2' fill='none'/%3E%3Ccircle cx='90' cy='60' r='25' stroke='%2364ffda' stroke-width='2' fill='none'/%3E%3C/svg%3E";

  // const busImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Crect x='40' y='40' width='100' height='50' rx='10' stroke='%2364ffda' stroke-width='2'/%3E%3Ccircle cx='60' cy='90' r='8' stroke='%2364ffda' stroke-width='2'/%3E%3Ccircle cx='120' cy='90' r='8' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const featuredProjects = [
    {
      year: '2025',
      title: 'Fashion recommendation system',
      description: 'Developed and deployed a hybrid fashion recommendation engine combining collaborative filtering (SVD), content-based filtering, and CNN-driven visual similarity, achieving 85 percent accuracy and robust cold-start handling (75 percent). • Engineered a modular ML pipeline with FastAPI, MLflow, and automated retraining, enabling real-time recommendations with sub-100ms response times and dynamic ensemble weighting. • Boosted user engagement by 40 percent in A/B testing through optimized feature fusion (text, image, metadata) and personalized scoring strategies deployed via scalable API services.',
      technologies: ['Python', 'Tensorflow', 'OpenCV', 'FastAPI', 'MLflow'],
      link: 'https://github.com/riship1999/StyloAI_Deep_Learning'
    },
    {
      year: '2025',
      title: 'BookTable',
      description: 'Built a role based restaurant reservation system for searching, booking, and managing restaurant reservations. • Designed RESTful APIs with JSON I/O, input validation, and error handling; integrated Google Maps. • Deployed backend and database to AWS EC2 with Load Balancer, ensuring high availability.',
      technologies: ['Python(FastAPI) ', 'AWS EC2', 'RESTful APIs', 'SQLite', 'Git', 'Scrum'],
      link: 'https://github.com/gopinathsjsu/team-project-2024849-mindbogglers'

    },
    {
      year: '2023',
      title: 'Meeting Room Booking System',
      description: 'Developed a full-stack web application for managing room reservations using Java, enabling CRUD functionality and improving efficiency for room allocation at work places. • Implemented a secure authentication system and ensured smooth user experience by using RESTful APIs.',
      technologies: ['Java', 'SQL', 'HTML/XML', 'CSS', 'MVC Framework'],

    },
    // {
    //   year: '2023',
    //   title: 'NYCE',
    //   description: 'Engineered a distinctive e-commerce online auction platform tailored to a specialized niche market. Led the end-to-end design process, integrating webhooks for live auction price updates and implementing cloud-based solutions using AWS stack for enhanced scalability.',
    //   technologies: ['React', 'Python', 'AWS'],
    //   image: nyceImg,
    //   link: 'https://nycanx.com/'
    // },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-header">
        <Link to="/allProjects" className="view-all-link">
          View All
        </Link>
      </div>

      <div className="projects-list">
        {featuredProjects.map((project, index) => (
          <ExperienceItem key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              <div className="blog-post-content">
                {/* <div className="blog-image-container">
                  <img src={project.image} alt={project.title} className="blog-image" />
                </div> */}

                <div className="blog-details">
                  <p className="blog-year">{project.year}</p>
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
