const Offer = require('./offer.model');

/**
 * Get all posts
 * @returns all offers
 */
async function getAllOffers () {
  const offers = await Offer.find().populate('user');
  return offers;
}

/**
 * Get post by id
 * @param {string} id Indentifier of the offer to be filtered
 * @returns offer
*/

async function getOffertById (id) {
  const offer = Offer.findById(id).populate('user');
  return offer;
}

/**
 * Get post by user id
 * @param {string} id Indentifier of the offers to be filtered
 * @returns offers
*/

async function getOffersByUserId(id) {
  // if( !mongoose.Types.ObjectId.isValid(id) ) return false;
  const offer = await Offer.find({user: id}).populate({ path: 'user' });
  return offer;

}

/**
 * Create a new offer
 * @param {Object} offer Offer to create
 * @returns offer created
 */

 async function createOffer(offer) {
  const newOffer = new Post(offer);
  const savedOffer = await newOffer.save();
  return savedOffer;
}

/**
 * Update a offer
 * @param {string} id Indentifier of the offer to be updated
 * @param {*} post Body of the offer to be updated
 * @returns offer updated
 */

 async function updateOffer(id, offer) {
  const updatedOffer = await Offer.findByIdAndUpdate(id, offer);
  return updatedOffer;
}

/**
 * Delete a post
 * @param {String} id Identifier of the offer to be deleted
 * @returns Offer deleted
 */

 async function deleteOffer(id) {
  const deletedOffer = await Offer.findByIdAndDelete(id)
  return deletedOffer;
}

module.exports = {
  getAllOffers,
  getOffertById,
  getOffersByUserId,
  createOffer,
  updateOffer,
  deleteOffer,
}
