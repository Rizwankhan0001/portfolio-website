import React from 'react';

const skills = [
  {
    icon: "fas fa-code",
    title: "Languages",
    description: "C/C++, Python, JavaScript, R"
  },
  {
    icon: "fas fa-cogs",
    title: "Frameworks",
    description: "React.js, Node.js, Express.js, Web3"
  },
  {
    icon: "fas fa-database",
    title: "Database & Storage",
    description: "MongoDB, SQL, GitHub"
  },
  {
    icon: "fas fa-tools",
    title: "Technologies",
    description: "OpenAI, ChatGPT, Linux, Docker, Shopify"
  },
  {
    icon: "fas fa-microchip",
    title: "Specialized",
    description: "VLSI, DevOps"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={skill.icon}></i>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
