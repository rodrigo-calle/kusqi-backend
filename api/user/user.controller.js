const crypto = require('crypto');

const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  getUsersByCategory

} = require('./user.service')
const { sendEmail } = require('../../utils/email');
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
  const { id } = req.params;
  console.log(id)
  try{
    const user = await getUserById(id);

    if(!user) {
      return res.status(404).json({
        message: `user with ${id} not found`
      });
    }
    console.log(user);
    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    });
  }
}


// POST create a user

async function createUserHandler(req, res) {
  const newUser = req.body;
  try{

    const hash = crypto.createHash('sha256').update(newUser.email).digest('hex');
    newUser.passwordResetToken = hash;
    newUser.passwordResetExpires = Date.now() + 3600000 * 24;// 24 hour


    const user = await createUser(newUser);
    /* return res.status(200).json(user); */
    const email = {
      to: user.email,
      subject: 'Confirmar cuenta',
      template_id: 'd-ae894b399ac14d7aa9c560691e66e41e',
      dynamic_template_data: {
        url: 'https://kusqi.netlify.app/user/activate/' + hash,
        //url: 'http://localhost:3000/user/activate/' + hash,
        email: user.email
      }
    }

    sendEmail(email)



    res.status(201).json(user);
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
    res.status(201).json(user);
  }catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}

async function getUsersByCategoryHandler(req, res) {
  const {category} = req.params;
  console.log(category);

  try {
    const user = await getUsersByCategory(category);
    if(!user) {
      res.status(404).json({
        message: `user  ${category} not found `
      })
    }
    res.status(201).json(user);
  }catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}

async function updateUserHandler(req, res) {
  const id = req.user._id
  try {
    const user = await updateUser(id, req.body);
    if(!user) {
      return res.status(404).json({
        message: `User not found with id: ${id}`
      });
    }
    return res.status(200).json(user);
  } catch(error) {
    return res.status(500).json({
      error: error.message
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
  getUserByEmailHandler,
  updateUserHandler,
  getUsersByCategoryHandler,
};
