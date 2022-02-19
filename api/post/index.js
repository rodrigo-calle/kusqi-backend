const { Router } = require('express');

const {
  createPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  getPostByUserIdHandler,

} = require('./post.controller')

const router = Router();


router.post('/', createPostHandler);
router.get('/', getAllPostsHandler);

// router.get('/post', getPostByIdHandler);

router.get('/user/:id', getPostByUserIdHandler);




module.exports = router;
