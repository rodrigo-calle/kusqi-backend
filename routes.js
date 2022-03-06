const user = require('./api/user');
const post = require('./api/post');
const product = require('./api/product');
const service = require('./api/service');
const authLocal = require('./auth/local');
const upload = require('./api/upload');
const cart = require('./api/cart');
const offer = require('./api/offer');
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
  app.use('/api/offers', offer);
}

module.exports = routes;
