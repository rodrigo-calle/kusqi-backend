const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  whatsapp: {
    type: String,
  },
  item: {
    type: Array,
  },
  total: {
    type: Number,
    default: 0.00,
  }
}, {
  timestamps: true,
},)

module.exports = mongoose.model('Cart', CartSchema);
