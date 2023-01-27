const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {SECRET_WORD} = process.env;

const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    try{
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const result = await User.create({
            name,
            email,
            password: hashedPassword
        })
        if(!result){
            const err = new Error;
            err.status = 400;
            err.message = "User creation error";
            throw(err);
        }
        
        const token = jwt.sign({
            _id: result._id
        }, SECRET_WORD);

        await User.findByIdAndUpdate(result._id, {
            token
        })

        res.status(201).json({
            message: "User created",
            token,
        })
    }
    catch(err){
        err.status = 400;
        err.message = "User creation error";
        next(err);
    }
}

module.exports = signup;