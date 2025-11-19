const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// Public routes
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);

// Admin routes (add authentication middleware in production)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
