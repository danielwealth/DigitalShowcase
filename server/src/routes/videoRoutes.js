// backend/src/routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { createVideo, getVideos, getVideoById } = require('../controllers/videoController');
const { protect } = require('../middleware/authMiddleware');

// Create new video (requires login)
router.post('/', protect, createVideo);

// Get all videos
router.get('/', getVideos);

// Get single video by ID
router.get('/:id', getVideoById);

module.exports = router;
