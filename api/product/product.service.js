const Product = require('./product.model');

/**
 * Get all products
 * @returns all products
 */

 async function getAllProducts() {
  const products = Product.find();
  return products;
}



/**
 * Get product by id
 * @param {string} id Indentifier of the product to be filtered
 * @returns product
*/

async function getProductById (id) {
  const product = Product.findById(id).populate('user');
  return product;
}


/**
 * Get product by user id
 * @param {string} id Indentifier of the product to be filtered
 * @returns products
*/

async function getProductsByUserId(id) {
  const products = await Product.find({user: id});
  return products;

}

/**
 * Create a new product
 * @param {Object} product Product to create
 * @returns product created
 */

async function createProduct(product) {
  const newProduct = new Product(product);
  const savedProduct = await newProduct.save();
  return savedProduct;
}

/**
 * Update a product
 * @param {string} id Indentifier of the product to be updated
 * @param {*} product Body of the product to be updated
 * @returns product updated
 */

async function updateProduct(id, product) {
  const updateProduct = await Product.findByIdAndUpdate(id, product);
  return updateProduct;
}

/**
 * Delete a product
 * @param {String} id Identifier of the product to be deleted
 * @returns Product deleted
 */

async function deleteProduct(id) {
  const deletedProduct = await Product.findByIdAndDelete(id)
  return deletedProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByUserId,
  createProduct,
  updateProduct,
  deleteProduct,
}

