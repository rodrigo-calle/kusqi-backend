const user = require('./api/user');
const post = require('./api/post');
const product = require('./api/product');
const service = require('./api/service');

//defining routes

function routes (app) {
  app.use('/api/users', user)
  app.use('/api/posts', post)
  app.use('/api/products', product)
  app.use('/api/services', service)
}

module.exports = routes;
