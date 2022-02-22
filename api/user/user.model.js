const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    default: '1111122222333',
  },
  category: {
    type: String,
    default: "Categoria de negocio"
  },
  avatar: {
    type: String,
    default: 'kusqi/avatar_zgihbg'
  },
  banner: {
    type: String,
    default: 'kusqi/banner_sn8a8m'
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    default: "Mi Negocio SAC",
  },

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
  ,
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 120,
    default: "Breve descripción de mi negocio...",
  },
  phone: {
    type: String,
    default: "(01)956542"
  },
  cellphone: {
    type: String,
    default: "(+51)999 999 999"
  },
  active: {
    type: Boolean,
    default: false,
  },
  contact_email: {
    type: String,
    default: 'email.contacto@gmail.com'
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
}, );

UserSchema.pre('save', async function (next) {
  const user = this;
  console.log(user)
  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
})

UserSchema.pre('findOneAndUpdate', async function() {
  const passUpdate = await this.model.findOne(this.getQuery())
  try {
    if (passUpdate.password !== this._update.password) {
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(this._update.password, salt)
      this._update.password = newPassword
    }
  } catch (error) {
    console.log('errorSalt', error);
  }
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return await bcrypt.compare(candidatePassword, user.password);
}

//virtuals

UserSchema.virtual('businessProfile').get(function () {
  const {
    id,
    email,
    name,
    ruc,
  } = this;
  return {
    id,
    email,
    name,
    ruc,
  }
})

module.exports = mongoose.model('User', UserSchema);
