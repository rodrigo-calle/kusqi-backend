const { Router } = require('express');


const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByEmailHandler,
  getUserByIdHandler,
} = require('./user.controller')

const { UserSchema } = require('./user.schema');
const validateRequest = require('../../middleware/validateRequest');
const { isAuthenticated } = require('../../auth/auth.service')


const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.post('/', validateRequest(UserSchema, 'body'), createUserHandler);



module.exports = router;
