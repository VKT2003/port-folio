import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
// console.log(image)

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  return (
    <div className={`${styles.projects}`} id='projects'>
      <div className={`${styles.description}`}>
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on.</p>
      </div>
      <div className={`${styles.grid}`}>
        {projects.map((project, index) => (
          <div key={project.id || index} className={`${styles.card}`}>
            <img src={`/${project.image}`} alt="Project" />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={`${styles.skills}`}>
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill.skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
