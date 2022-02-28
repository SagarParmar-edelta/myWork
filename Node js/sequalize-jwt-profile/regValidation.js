const Joi = require('joi');

const regValidation = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
});

module.exports = regValidation;
