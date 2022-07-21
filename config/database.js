const mongoose = require('mongoose');
const URI = process.env.DB_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true, // is no longer supported https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
      useUnifiedTopology: true // is no longer supported
    });
    console.log('MongoDB connected!!');
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
}


module.exports = connectDB;
