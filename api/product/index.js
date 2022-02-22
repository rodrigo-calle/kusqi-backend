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
router.post('/', createProductHandler);

router.get('/product/:id',  getProductByIdHandler);
router.get('/user/:id', getProductByUserIdHandler);

module.exports = router;
