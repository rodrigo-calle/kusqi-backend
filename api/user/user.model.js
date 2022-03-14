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
    default: '',
  },
  category: {
    type: String,
    default: " "
  },
  avatar: {
    type: String,
    default: 'kusqi/avatar_zgihbg'
  },
  banner: {
    type: String,
    default: 'kusqi/fruit-icons-g50ee09f88_1280_lzcud8'
  },
  name: {
    type: String,
    default: "",
  },

  province: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  avenue: {
    type: String,
    default: "",
  },
  number: {
    type: String,
    default: "S/N",
  }
  ,
  description: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: ""
  },
  cellphone: {
    type: String,
    default: ""
  },
  whatsapp: {
    type: String,
    default: ""
  },
  active: {
    type: Boolean,
    default: false,
  },
  contact_email: {
    type: String,
    default: ''
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
}, );

UserSchema.pre('save', async function (next) {
  const user = this;
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
    avatar,
  } = this;
  return {
    id,
    email,
    name,
    ruc,
    avatar,
  }
})

module.exports = mongoose.model('User', UserSchema);
