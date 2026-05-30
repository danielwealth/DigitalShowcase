// backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Get user profile by ID
router.get('/:id', protect, getUserProfile);

module.exports = router;
