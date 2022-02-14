const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true
  },
  price: {
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


module.exports = mongoose.model('Service', ServiceSchema)
