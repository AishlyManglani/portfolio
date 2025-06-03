import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <p className="about-desc">
        I’m a versatile software engineer pursuing my Master’s in Software Engineering at San Jose State University, with hands-on experience building full-stack web applications, intelligent ML pipelines, and scalable cloud deployments. With a foundation in React, Python, and REST APIs—alongside experience at Cisco and real-world academic projects—I bring a balance of frontend finesse and backend logic. Passionate about translating complex problems into user-centric solutions, I excel in collaborative environments that demand adaptability, innovation, and technical precision.

      </p>

      <p className="about-desc">
        Beyond academics, I serve as an <span className="highlight">Adobe Student Ambassador</span>, where I empower peers by demonstrating Adobe creative suite for academic and personal projects and lead hands-on workshops.
      </p>

      {/* <p className="about-desc">
        Currently, I also work as a student assistant at <span className="highlight">SJSU social work department</span> where: <ul><li>I Assist in administrative tasks, data and document management, ensuring smooth departmental operations.</li> <li> I also Support in organizing events and workshops, demonstrating strong organizational and communication skills.</li> <li> Provide technical assistance for software tools and platforms used by the department. </li></ul>
      </p> */}

      <p className="about-desc">
        Beyond coding, I love to <span className="highlight"> dance </span>, I also hold a <span className="highlight">  graduate degree </span> in Indian dance form- <span className="highlight"> Kathak </span>. I enjoy playing <span className="highlight"> basketball</span> and I'm also an <span className="highlight"> avid reader </span>.
      </p>
    </div>
  );
};

export default About;
