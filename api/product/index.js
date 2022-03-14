const { Router } = require('express');

const {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  getProductByUserIdHandler,
  deleteProductByIdHandler,
  updateProductHandler,
} = require('./product.controller')

const router = Router();
const { isAuthenticated } = require('../../auth/auth.service')



router.get('/', getAllProductsHandler);
router.post('/', createProductHandler);
router.patch('/product/edit/:id', updateProductHandler)
router.get('/product/:id',  getProductByIdHandler);
router.get('/user/:id', getProductByUserIdHandler);

router.delete('/product/:id', deleteProductByIdHandler);
module.exports = router;
