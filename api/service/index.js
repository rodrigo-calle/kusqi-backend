const { Router } = require('express');

const {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  getServiceByUserIdHandler,
} = require('./service.controller')

const router = Router();



router.get('/', getAllServicesHandler);
router.get('/user', getServiceByUserIdHandler);
router.get('/service', getServiceByIdHandler);
router.post('/', createServiceHandler);

module.exports = router;
