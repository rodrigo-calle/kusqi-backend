const { Router } = require('express');

const {
  createOfferHandler,
  deleteOfferByIdHandler,
  getAllOffersHandler,
  getOfferByIdHandler,
  getOfferByUserIdHandler,
  updateOfferHandler,

} = require('./offer.controller');

const router = Router();

router.get('/', getAllOffersHandler);
router.post('/', createOfferHandler);
router.patch('/offer/edit/:id', updateOfferHandler)
router.get('/offer/:id', getOfferByIdHandler);
router.get('/user/:id', getOfferByUserIdHandler);
router.delete('/offer/:id', deleteOfferByIdHandler)


module.exports = router;
