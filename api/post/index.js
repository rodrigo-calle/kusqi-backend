const { Router } = require('express');

const {
  createPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  getPostByUserIdHandler,
  updatePostHandler,
  deletePostByIdHandler,

} = require('./post.controller')

const router = Router();

router.get('/', getAllPostsHandler);
router.get('/post/:id', getPostByIdHandler);
router.patch('/post/edit/:id', updatePostHandler)
router.post('/', createPostHandler);
router.get('/user/:id', getPostByUserIdHandler);
router.delete('/post/:id', deletePostByIdHandler);



module.exports = router;
