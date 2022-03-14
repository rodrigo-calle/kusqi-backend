const { Router } = require('express');

const {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  getServiceByUserIdHandler,
  deleteServiceByIdHandler,
  updateServiceHandler,
} = require('./service.controller')

const router = Router();
const { isAuthenticated } = require('../../auth/auth.service')


router.get('/', getAllServicesHandler);
router.get('/service/:id', getServiceByIdHandler);
router.post('/', createServiceHandler);
router.patch('/service/edit/:id', updateServiceHandler)

router.get('/user/:id', getServiceByUserIdHandler);
router.delete('/service/:id', deleteServiceByIdHandler);

module.exports = router;
