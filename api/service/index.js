const { Router } = require('express');

const {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  getServiceByUserIdHandler,
} = require('./service.controller')

const router = Router();
const { isAuthenticated } = require('../../auth/auth.service')


router.get('/', getAllServicesHandler);
router.get('/user', isAuthenticated(), getServiceByUserIdHandler);
router.get('/service', getServiceByIdHandler);
router.post('/', createServiceHandler);

module.exports = router;
