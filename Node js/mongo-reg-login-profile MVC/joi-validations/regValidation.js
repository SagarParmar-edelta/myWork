const Joi = require('joi');

const regValidation = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
});

module.exports = regValidation;
