const {
  createOffer,
  deleteOffer,
  getAllOffers,
  getOffersByUserId,
  getOffertById,
  updateOffer
} = require('./offer.service');

async function getAllOffersHandler(req, res) {
  try{
    const offers = await getAllOffers();
    return res.status(200).json(offers);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createOfferHandler(req, res) {
  const offerData = req.body;
  try {
    const offer = await createOffer(offerData);
    return res.status(200).json(offer);
  } catch(err) {
    console.log(err)
    return res.status(500).json({ error: err.message })
  }
}


async function getOfferByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const offer = await getOffertById(id);

    if (!offer) {
      return res.status(404).json({ message: `Offer not found with id: ${id}` });
    }

    return res.status(200).json(offer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getOfferByUserIdHandler(req, res){

  const {id} = req.params;
  try {
    const offer = await getOffersByUserId(id);
    if(!offer) {
      return res.status(404).json({
        message: `offer with user id ${id} not found`
      });
    }
    return res.status(200).json(offer);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function updateOfferHandler(req, res) {
  const { id } = req.params;
  try {
    const offer = await updateOffer(id, req.body);
    if(!offer) {
      return res.status(404).json({
        message: `offer with id ${id} not found`
      });
    }
    return res.status(200).json(offer);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}


async function deleteOfferByIdHandler(req, res){
  const { id } = req.params;
  try {
    const offer = await deleteOffer(id);
    if(!offer) {
      return res.status(404).json({
        message: `offer with id ${id} not found`
      });
    }
    return res.status(200).json(offer);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }
}


module.exports = {
  getAllOffersHandler,
  createOfferHandler,
  getOfferByIdHandler,
  getOfferByUserIdHandler,
  deleteOfferByIdHandler,
  updateOfferHandler
}
