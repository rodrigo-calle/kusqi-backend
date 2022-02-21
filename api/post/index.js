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
// router.get('/post', getPostByIdHandler);

router.get('/user/:id', getPostByUserIdHandler);




module.exports = router;
