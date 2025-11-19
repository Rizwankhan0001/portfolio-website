const mongoose = require('mongoose');
const connectDB = require('../config/database');
const Project = require('../models/Project');
const Experience = require('../models/Experience');

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Project.deleteMany({});
    await Experience.deleteMany({});

    // Seed Projects
    const projects = [
      {
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Node.js",
        icon: "fas fa-globe",
        technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        demoLink: "#",
        codeLink: "#",
        featured: true,
        order: 1
      },
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        icon: "fas fa-shopping-cart",
        technologies: ["React", "Express", "MongoDB", "Stripe"],
        demoLink: "#",
        codeLink: "#",
        featured: true,
        order: 2
      },
      {
        title: "Task Management App",
        description: "Collaborative task management application",
        icon: "fas fa-tasks",
        technologies: ["Vue.js", "Firebase", "Vuetify"],
        demoLink: "#",
        codeLink: "#",
        featured: false,
        order: 3
      }
    ];

    // Seed Experience
    const experiences = [
      {
        title: "Full Stack Developer",
        company: "Tech Company",
        date: "2023 - Present",
        responsibilities: [
          "Developed responsive web applications using React and Node.js",
          "Implemented RESTful APIs and database design",
          "Collaborated with cross-functional teams"
        ],
        current: true,
        order: 1
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency",
        date: "2022 - 2023",
        responsibilities: [
          "Built user interfaces with modern JavaScript frameworks",
          "Optimized website performance and SEO",
          "Worked closely with designers and backend developers"
        ],
        current: false,
        order: 2
      }
    ];

    await Project.insertMany(projects);
    await Experience.insertMany(experiences);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedData();