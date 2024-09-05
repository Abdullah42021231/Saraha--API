import joi from 'joi'
export const signUpValidation = joi.object({
    name: joi.string().min(2).max(10).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    cPassword :joi.string().valid(joi.ref('password')).required()

})
export const signInValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    cPassword :joi.string().valid(joi.ref('password')).required()

})