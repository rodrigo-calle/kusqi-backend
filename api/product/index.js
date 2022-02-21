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
router.get('/product',  getProductByIdHandler);
router.post('/', createProductHandler);

router.get('/user/:id', getProductByUserIdHandler);

module.exports = router;
