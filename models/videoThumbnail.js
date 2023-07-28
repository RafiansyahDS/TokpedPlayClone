const mongoose = require('mongoose');

const VideoThumbnailSchema = new mongoose.Schema({
  videoID: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {  
    type: String,
    required: true,
  },
});

const VideoThumbnail = mongoose.model('VideoThumbnail', VideoThumbnailSchema);

module.exports = VideoThumbnail;
