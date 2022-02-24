const {
  createCart,
  updateCart,
  getCart,
  deleteCartById,
} = require('./cart.service')

async function createCartHandler(req, res) {
  const cartData = req.body;
  try {
    const cart = await createCart(cartData);
    return res.status(200).json(cart);
  } catch(err) {
    console.log(err)
    return res.status(500).json({ error: err.message })

  }
}


async function updateCartHandler(req, res) {
  const id = req.body.id
  try {
    const cart = await updateCart(id, req.body);
    if(!cart) {
      return res.status(404).json({
        message: `Cart not found with id: ${id}`
      });
    }
    return res.status(200).json(cart);
  } catch(error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

async function findCartById(req, res) {
  const {id} = req.params;
  try{
    const cart = await getCart(id);
    if(!cart) {
      return res.status(404).json({
        message: `Cart not found with id: ${id}`
      });
    }
    return res.status(200).json(cart);
  } catch(error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

async function deleteCartByIdHandler(req, res) {
  const {id} = req.params;
  try{
    const cart = await deleteCartById(id);
    if(!cart) {
      return res.status(404).json({
        message: `Cart not found with id: ${id}`
      });
    }
    return res.status(200).json(cart);
  } catch(error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

module.exports = {
  createCartHandler,
  updateCartHandler,
  findCartById,
  deleteCartByIdHandler
}
