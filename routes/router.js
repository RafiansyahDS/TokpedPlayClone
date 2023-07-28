const express = require('express');
const router = express.Router();
const VideoThumbnail = require('../models/videoThumbnail.js');
const Product = require('../models/product.js');
const Comment = require('../models/comment.js');

router.get('/video-thumbnails', async (req, res) => {
  try {
    const thumbnails = await VideoThumbnail.find({}, { _id: 0, __v: 0 });
    res.json(thumbnails);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/products/:videoID', async (req, res) => {
  const videoID = req.params.videoID;
  try {
    const products = await Product.find({ videoID },{ _id: 0, __v: 0, videoID: 0});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/comments/:videoID', async (req, res) => {
  const videoID = req.params.videoID;
  try {
    const comments = await Comment.find({ videoID },{ _id: 0, __v: 0, videoID: 0 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/submit-comment', async (req, res) => {
  const { username, comment, videoID } = req.body;
  try {
    const newComment = new Comment({
      username,
      comment,
      timestamp: new Date(),
      videoID,
    });

    await newComment.save();
    res.json({ Success: 'Comment submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
