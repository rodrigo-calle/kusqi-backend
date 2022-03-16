const {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  updatePost,
  createUserPost,
} = require('./post.service')

async function getAllPostsHandler(req, res) {
  try{
    const posts = await getAllPosts();
    return res.status(200).json(posts);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createPostHandler(req, res) {
  const postData = req.body;
  try {
    const post = await createPost(postData);
    return res.status(200).json(post);
  } catch(err) {
    console.log(err)
    return res.status(500).json({ error: err.message })

  }
}

async function getPostByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ message: `Post not found with id: ${id}` });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getPostByUserIdHandler(req, res){

    const {id} = req.params;
    try {
      const post = await getPostsByUserId(id);
      if(!post) {
        return res.status(404).json({
          message: `post with user id ${user} not found`
        });
      }
      return res.status(200).json(post);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updatePostHandler(req, res) {
  const { id } = req.params;
  try {
    const post = await updatePost(id, req.body);
    if(!post) {
      return res.status(404).json({
        message: `post with id ${id} not found`
      });
    }
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deletePostByIdHandler(req, res){
  const { id } = req.params;
  try {
    const post = await deletePost(id);
    if(!post) {
      return res.status(404).json({
        message: `post with id ${id} not found`
      });
    }
    return res.status(200).json(post);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}

module.exports = {
  getAllPostsHandler,
  createPostHandler,
  getPostByIdHandler,
  getPostByUserIdHandler,
  updatePostHandler,
  deletePostByIdHandler,


}
