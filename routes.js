const user = require('./api/user');
const post = require('./api/post');
const product = require('./api/product');
const service = require('./api/service');
const authLocal = require('./auth/local');
const upload = require('./api/upload');
const cart = require('./api/cart');
//defining routes

function routes (app) {
  app.use('/api/users', user);
  app.use('/api/posts', post);
  app.use('/api/products', product);
  app.use('/api/services', service);
  app.use('/auth/local', authLocal);
  // route to upload images
  app.use('/api/uploads', upload);
  app.use('/api/carts', cart);
}

module.exports = routes;
