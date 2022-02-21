const { Router } = require('express');


const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByEmailHandler,
  getUserByIdHandler,
  updateUserHandler
} = require('./user.controller')

const { UserSchema } = require('./user.schema');
const validateRequest = require('../../middleware/validateRequest');
const { isAuthenticated } = require('../../auth/auth.service')


const router = Router();

router.get('/', getAllUsersHandler);

router.post('/', validateRequest(UserSchema, 'body'), createUserHandler);

router.patch('/edit', isAuthenticated(), updateUserHandler)
router.get('/:id', getUserByIdHandler);

module.exports = router;
