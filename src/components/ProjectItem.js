import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="projects-item">
      <img src={project.image} alt={project.id} />
      <h4>Description</h4>
      <p>{project.description}</p>
      <div className="projects-buttons">
        <div className="projects-buttons__view">View</div>
        <div className="projects-buttons__download">Download</div>
      </div>
    </div>
  );
};

export default ProjectItem;
