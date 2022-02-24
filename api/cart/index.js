const { Router } = require('express');

const {
  createCartHandler,
  updateCartHandler,
  findCartById,
  deleteCartByIdHandler,
} = require('./cart.controller');

const router = Router();

router.post('/', createCartHandler);
router.patch('/edit', updateCartHandler);
router.get('/cart/:id', findCartById);
router.delete('/cart/delete/:id', deleteCartByIdHandler);

module.exports = router;
