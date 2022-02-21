/* const express = require('express');
const stripe = require('stripe')('sk_test_51KVUlvFaVrq9yiMZE4KiHeQUh0nnBaW4sg3oqBNEmy3XCJkKCinwwChPseyZJswNgtgoAci3b56gFTC5J6qPjUi600DZhm2z0I');
const {v4: uuidv4} = require('uuid');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.message({
    message: 'It Works'
  })
})

router.post("/pay", (req, res, next) => {
  console.log(req.body.token);
  const { token, amount} = req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers.create({
    email: token.email,
    source: token
  }).then(customer)
})
 */
