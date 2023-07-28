const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  videoID: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
