const Cart = require('./cart.model');

async function createCart(cart) {
  const newCart = new Cart(cart);
  const savedSaved = await newCart.save();
  return savedSaved;
}

async function updateCart(id, product) {
  const updateCart = await Cart.findByIdAndUpdate(id, product);
  return updateCart;
}

async function getCart(id) {
  const cart = await Cart.findById(id);
  return cart;
}

async function deleteCartById(id) {
  const cart = await Cart.findByIdAndDelete(id);
  return cart
}

module.exports = {
  createCart,
  updateCart,
  getCart,
  deleteCartById
}
