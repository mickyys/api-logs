const Joi = require("joi");
const { types, application } = require("../types/types");

const schema = Joi.object({
  application: Joi.string().required().valid(...application),
  type: Joi.string().required().valid(...types),
  message: Joi.string().required(),
  option: Joi.object({
    user: Joi.string(),
    phone: Joi.string(),
    version: Joi.string(),
    ip: Joi.string(),
    os: Joi.string(),
    geolocation: Joi.object({
      latitude: Joi.string(),
      longitude: Joi.string(),
    }),
    other: Joi.object({
    })
  })
});

module.exports = schema;