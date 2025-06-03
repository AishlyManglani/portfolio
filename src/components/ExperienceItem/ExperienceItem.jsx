import React from 'react'
import './ExperienceItem.css'

const ExperienceItem = ({ children }) => {
    return (
      <div className="experience-item group">
        <div className="experience-item-highlight"></div>
        {children}
      </div>
    );
  };
  

export default ExperienceItem;
