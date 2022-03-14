const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByUserId,
  updateProduct,
} = require('./product.service')

async function getAllProductsHandler(req, res) {
  try{
    const products = await getAllProducts();
    return res.status(200).json(products)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createProductHandler(req, res) {
  const productData = req.body;
  try {
    const product = await createProduct(productData);
    return res.status(200).json(product);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getProductByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ message: `Product not found with id: ${id}` });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getProductByUserIdHandler(req, res){
    // const id = req.user._id;
    const { id } = req.params;
    //console.log('idddd', id)
    try {
      const product = await getProductsByUserId(id);
      if(!product) {
        return res.status(404).json({
          message: `product with user id ${id} not found`
        });
      }
      console.log(product)
      return res.status(200).json(product);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateProductHandler(req, res) {
  const { id } = req.params;
  try {
    const product = await updateProduct(id, req.body);
    if(!product) {
      return res.status(404).json({
        message: `product with id ${id} not found`
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteProductByIdHandler(req, res){
  const { id } = req.params;
  try {
    const product = await deleteProduct(id);
    if(!product) {
      return res.status(404).json({
        message: `product with id ${id} not found`
      });
    }
    return res.status(200).json(product);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllProductsHandler,
  createProductHandler,
  getProductByIdHandler,
  getProductByUserIdHandler,
  deleteProductByIdHandler,
  updateProductHandler,
}
