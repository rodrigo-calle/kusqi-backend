const mongoose = require('mongoose');

const OfferSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: Boolean,
    default: false
  },
  picture: {
    type: String,
  },
  conditions: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
},);

module.exports = mongoose.model('Offer', OfferSchema);
