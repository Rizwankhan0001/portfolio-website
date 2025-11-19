import React from 'react';

const projects = [
  {
    icon: "fab fa-ethereum",
    title: "BlockFarm",
    description: "A groundbreaking agricultural management system utilizing blockchain technology, Ethereum, and smart contracts to enhance transparency and trust in the industry.",
    technologies: ["React.js", "Web3", "Solidity", "MongoDB", "Oracle"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    icon: "fas fa-user-md",
    title: "Personal Medical Record Management",
    description: "A secure and user-friendly Personal Medical Record Management App with encryption for safeguarding sensitive medical data, establishing trust.",
    technologies: ["React.js", "Node.js", "Solidity", "Web3"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "GPS+GSM Vehicle Tracking System",
    description: "Designed and implemented a GPS+GSM based Vehicle Tracking System using Arduino for real-time location tracking with Android and web applications.",
    technologies: ["Android App", "Arduino Uno", "Web App", "IoT"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    icon: "fab fa-youtube",
    title: "YouTube Recommendation System",
    description: "Built an education-specific YouTube recommendation system that improved learning outcomes through personalized content suggestions.",
    technologies: ["React.js", "JavaScript", "Machine Learning"],
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.codeLink} className="project-link">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
