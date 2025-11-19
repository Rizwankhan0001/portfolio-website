const mongoose = require('mongoose');

const dbUtils = {
  // Check database connection status
  isConnected: () => {
    return mongoose.connection.readyState === 1;
  },

  // Get database statistics
  getStats: async () => {
    try {
      const Contact = mongoose.model('Contact');
      const Project = mongoose.model('Project');
      const Experience = mongoose.model('Experience');

      const stats = {
        contacts: await Contact.countDocuments(),
        projects: await Project.countDocuments(),
        experiences: await Experience.countDocuments(),
        newContacts: await Contact.countDocuments({ status: 'new' })
      };

      return stats;
    } catch (error) {
      throw new Error('Failed to get database stats: ' + error.message);
    }
  },
  
  // Clear all collections (use with caution)
  clearAll: async () => {
    try {
      await mongoose.connection.db.dropDatabase();
      console.log('Database cleared successfully');
    } catch (error) {
      throw new Error('Failed to clear database: ' + error.message);
    }
  },

  // Backup data
  backup: async () => {
    try {
      const Contact = mongoose.model('Contact');
      const Project = mongoose.model('Project');
      const Experience = mongoose.model('Experience');

      const backup = {
        contacts: await Contact.find({}),
        projects: await Project.find({}),
        experiences: await Experience.find({}),
        timestamp: new Date()
      };

      return backup;
    } catch (error) {
      throw new Error('Failed to backup data: ' + error.message);
    }
  }
};

module.exports = dbUtils;