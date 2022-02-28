const Joi = require('joi');

const authSchema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
});

module.exports = authSchema;
