const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  submitContact,
  getAllContacts,
  updateContactStatus
} = require('../controllers/contactController');

// Validation middleware
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Public routes
router.post('/submit', contactValidation, submitContact);

// Admin routes (add authentication middleware in production)
router.get('/', getAllContacts);
router.patch('/:id/status', updateContactStatus);

module.exports = router;
