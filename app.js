const express = require('express');

const expressConfig = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

expressConfig(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  routes(app);
  console.log("🚀 ~ server listening ~ PORT", PORT)
});

module.exports = app;
