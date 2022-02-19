const { Router } = require('express');

const {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  getProductByUserIdHandler,
} = require('./product.controller')

const router = Router();
const { isAuthenticated } = require('../../auth/auth.service')



router.get('/', getAllProductsHandler);
router.get('/user', isAuthenticated(), getProductByUserIdHandler);
router.get('/product',  getProductByIdHandler);
router.post('/', createProductHandler);

module.exports = router;
