import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate developer with 3+ years of experience in creating digital solutions. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.</p>
            <p>When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-img-placeholder">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
