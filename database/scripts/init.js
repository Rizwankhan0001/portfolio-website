const mongoose = require('mongoose');
const connectDB = require('../config/database');

// Import models to ensure they're registered
require('../models/Contact');
require('../models/Project');
require('../models/Experience');

const initializeDatabase = async () => {
  try {
    await connectDB();
    
    // Create indexes for better performance
    const Contact = mongoose.model('Contact');
    const Project = mongoose.model('Project');
    const Experience = mongoose.model('Experience');
    
    // Create indexes
    await Contact.createIndexes();
    await Project.createIndexes();
    await Experience.createIndexes();
    
    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Database initialization failed:', error);
    return false;
  }
};

module.exports = { initializeDatabase };