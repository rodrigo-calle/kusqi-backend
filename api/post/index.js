const { Router } = require('express');

const {
  createPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  getPostByUserIdHandler,

} = require('./post.controller')

const router = Router();

router.get('/', getAllPostsHandler);
router.post('/', createPostHandler);
router.get('/user/:id', getPostByUserIdHandler);
router.get('/post/:id', getPostByIdHandler);


module.exports = router;
