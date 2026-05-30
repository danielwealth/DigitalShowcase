// backend/src/controllers/videoController.js
const Video = require('../models/Video');

// Create new video
const createVideo = async (req, res) => {
  const { title, description, youtubeUrl, tags } = req.body;

  try {
    const video = await Video.create({
      userId: req.user.id,
      title,
      description,
      youtubeUrl,
      tags,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('userId', 'username email');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('userId', 'username email');
    if (!video) return res.status(404).json({ message: 'Video not found' });

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createVideo, getVideos, getVideoById };
