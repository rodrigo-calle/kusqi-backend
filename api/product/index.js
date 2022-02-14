const { Router } = require('express');

const {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  getProductByUserIdHandler,
} = require('./product.controller')

const router = Router();



router.get('/', getAllProductsHandler);
router.get('/user', getProductByUserIdHandler);
router.get('/product', getProductByIdHandler);
router.post('/', createProductHandler);

module.exports = router;
