const jwt = require('jsonwebtoken');
const {User} = require('../models');
require('dotenv').config;

const {SECRET_WORD} = process.env;

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization;
        const {_id} = jwt.verify(token, SECRET_WORD);
        if(!_id){
            throw new Error;
        }
        const user = await User.findById(_id);
        if(user.token !== token){
            throw new Error;
        }
        req._id = _id;
        next();
    }
    catch(err){
        err.status = 401;
        err.message = 'Missing header with authorization token';
        next(err);
    }
}


module.exports = auth;