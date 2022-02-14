const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ruc: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    default: "Mi Negocio SAC",
  },
  address: {
    province: {
      type: String,
      required: true,
      default: "Mi Provincia",
    },
    city: {
      type: String,
      required: true,
      default: "Mi Distrito",
    },
    avenue: {
      type: String,
      required: true,
      default: "Mi Avenida",
    },
    number: {
      type: String,
      required: true,
      default: "Número de local",
    }
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 120,
    default: "Breve descripción de mi negocio...",
  },
  phone: {
    type: Array,
  },
  cellphone: {
    type: Array,
  },
  active: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
}, );

//virtuals

UserSchema.virtual('business-profile').get(function () {
  const {
    email,
    name,
    ruc,
  } = this;
  return {
    email,
    name,
    ruc,
  }
})

module.exports = mongoose.model('User', UserSchema);
