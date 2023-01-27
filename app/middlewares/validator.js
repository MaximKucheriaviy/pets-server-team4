const joi = require('joi');

const singupSchena = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
})

const singupValidation = (req, res, next) => {
    try{
        const validate = singupSchena.validate(req.body);
        if(validate.error){
            const err = new Error;
            err.status = 400;
            err.message = "User creation error";
            throw(err);
        }
        next();
    }   
    catch(err){
        next(err);
    }
}

const loginValidator = (req, res, next) => {
    try{
        const validate = loginSchema.validate(req.body);
        if(validate.error){
            const err = new Error;
            err.status = 400;
            err.message = "Login error";
            throw(err);
        }
        next();
    }   
    catch(err){
        next(err);
    }
}

module.exports = {
    singupValidation,
    loginValidator
}