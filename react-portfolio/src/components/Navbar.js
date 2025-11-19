import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar" style={scrolled ? {
      background: 'rgba(255, 255, 255, 0.98)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
    } : {}}>
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>
        <div className={`nav-menu ${isActive ? 'active' : ''}`} id="nav-menu">
          <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
          <a href="#experience" className="nav-link" onClick={handleLinkClick}>Experience</a>
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
        </div>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
