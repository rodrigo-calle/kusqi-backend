const User = require('./user.model');

/**
 * Get all users
 * @returns all users
*/

async function getAllUsers() {
  const users = await User.find();
  return users;
}

/**
 *
 * @param {string} email email of use to identify user
 * @returns user
 */


async function getUserByEmail(email) {
  const user = await User.findOne({email})
  return user;
}



/**
 * Get user by id
 * @param {string} id Indentifier of the note to be filtered
 * @returns user
*/

async function getUserById(id) {
  const user = await User.findOne({_id: id})
  return user;
}

async function getUsersByCategory(value) {
  const user = await User.find({category: value})
  console.log(user);
  console.log(value)
  //find({category: value})
  return user;
}

/**
 * Create a new user
 * @param {Object} user User to create
 * @returns User created
 */


async function createUser(user){
  const newUser = await User.create(user);
  return newUser;
}


/**
 * Update a user
 * @param {string} id Indentifier of the user to be updated
 * @param {*} user Body of the user to be updated
 * @returns user updated
 */

//function for update
async function updateUser(id, user){
  const updateUser = await User.findByIdAndUpdate(id, user)
  return updateUser;
}


/**
 * Get user by query
 * @param {string} query Indentifier of the note to be filtered
 * @returns user
*/
async function findOneUser(query) {
  const user = await User.findOne(query);
  return user;
}


async function deleteUser(id) {
  const user = await User.findByIdAndDelete(id);
  return user;
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createUser,
  deleteUser,
  findOneUser,
  updateUser,
  getUsersByCategory

}
