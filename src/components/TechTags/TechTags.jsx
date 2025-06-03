import React from 'react';
import './TechTags.css';

const TechTags = ({ technologies }) => {
  return (
    <div className="tech-tags-container">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechTags; 