const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  getUserById,

} = require('./user.service')

// GET all users method

async function getAllUsersHandler (req, res) {
  try{
    const users = await getAllUsers();
    return res.status(200).json(users);
  }catch(err){
    return res.status(500).json({
      error: err.message
    })
  }
}

// GET user by id

async function getUserByIdHandler (req, res) {
  const id = req.body._id;
  try{
    const user = getUserById(id);

    if(!user) {
      return res.status(404).json({
        message: `user with ${id} not found`
      });
    }

    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    });
  }
}


// POST create a user

async function createUserHandler(req, res) {
  const dataUser = req.body;
  try{
    const user = await createUser(dataUser);
    return res.status(200).json(user);

  }catch(err) {
    res.status(500).json({
      error: err.message
    })
  }
}


async function getUserByEmailHandler(req, res) {
  const email = req.body.email;

  try {
    const user = await getUserByEmail(email);
    if(!user) {
      res.status(404).json({
        message: `user  ${email} not found `
      })
    }
    return user;
  }catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}

// DELETE delete a user by id

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    if(!user) {
      return res.status(404).json({
        message: `user with ${id} not found`
      })
    }
    return res.status(200).json(user)
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  deleteUserHandler,
  getUserByEmailHandler
};
