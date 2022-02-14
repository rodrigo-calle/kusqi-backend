const { Router } = require('express');

const {
  createPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  getPostByUserIdHandler,
} = require('./post.controller')

const router = Router();



router.get('/', getAllPostsHandler);
router.get('/user', getPostByUserIdHandler);
router.get('/post', getPostByIdHandler);
router.post('/', createPostHandler);

module.exports = router;
