const Joi = require('joi');
const joiObjectId = require('joi-objectid');

Joi.objectid = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectid().required(),
});

const PayloadSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().min(8).max(100).required(),
  name: Joi.string(),
  ruc: Joi.string(),
  description: Joi.string(),
  phone: Joi.string(),
  cellphone: Joi.string(),
  whatsapp: Joi.string(),
  active: Joi.boolean().default(false)
});


const UserSchema  = Joi.object().keys({
  body: PayloadSchema,
  params: ParamsSchema,
})

module.exports = { PayloadSchema, ParamsSchema, UserSchema };
