const mongoose = require('mongoose');

const VideoThumbnailSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    thumbnailURL:{
        type: String,
        required: true
    }
});

const videoThumbnail = mongoose.model('VideoThumbnail', VideoThumbnailSchema);

module.exports = videoThumbnail;