const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videoID: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
