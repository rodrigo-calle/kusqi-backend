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
router.get('/service', getServiceByIdHandler);
router.post('/', createServiceHandler);

router.get('/user/:id', getServiceByUserIdHandler);

module.exports = router;
