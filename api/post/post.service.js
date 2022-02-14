const Post = require('./post.model');

/**
 * Get all posts
 * @returns all posts
 */

async function getAllPosts() {
  const posts = Post.find().populate('user');
  return posts;
}



/**
 * Get post by id
 * @param {string} id Indentifier of the post to be filtered
 * @returns post
*/

async function getPostById (id) {
  const post = Post.findById(id).populate('user');
  return post;
}


/**
 * Get post by user id
 * @param {string} id Indentifier of the post to be filtered
 * @returns posts
*/

async function getPostsByUserId(id) {
  const posts = await Post.find({user: id});
  return posts;

}

/**
 * Create a new post
 * @param {Object} post Post to create
 * @returns post created
 */

async function createPost(post) {
  const newPost = new Post(post);
  const savedPost = await newPost.save();
  return savedPost;
}

/**
 * Update a post
 * @param {string} id Indentifier of the post to be updated
 * @param {*} post Body of the post to be updated
 * @returns post updated
 */

async function updatePost(id, post) {
  const updatePost = await Post.findByIdAndUpdate(id, post);
  return updatePost;
}

/**
 * Delete a post
 * @param {String} id Identifier of the post to be deleted
 * @returns Post deleted
 */

async function deletePost(id) {
  const deletedPost = await Post.findByIdAndDelete(id)
  return deletedPost;
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByUserId,
  createPost,
  updatePost,
  deletePost,
}
