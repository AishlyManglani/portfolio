import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'FastAPI', 'Django', 'Flask', 'Node.js', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux', 'Azure', 'GCP'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'SQLite'],
  },
  {
    title: 'Architecture',
    skills: ['REST APIs', 'Microservices', 'Concurrency', 'TCP/IP', 'Data Modeling'],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
