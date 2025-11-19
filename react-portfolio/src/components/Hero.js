import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div>
          <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
          <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
          <p className="hero-description">I create beautiful, responsive websites and applications that provide exceptional user experiences.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
