const Joi = require('joi');

const regValidation = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
});

module.exports = regValidation;
