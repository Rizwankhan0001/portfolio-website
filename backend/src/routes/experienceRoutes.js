const express = require('express');
const router = express.Router();
const {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

// Public routes
router.get('/', getAllExperiences);

// Admin routes (add authentication middleware in production)
router.post('/', createExperience);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

module.exports = router;
