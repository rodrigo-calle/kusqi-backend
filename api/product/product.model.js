const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
    default: 'avatar_zgihbg'
  },
  available: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
},
{
  timestamps: true,
},)


module.exports = mongoose.model('Product', ProductSchema);
