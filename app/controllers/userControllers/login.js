const {User} = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {SECRET_WORD} = process.env;


const login = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        const userFinded = await User.findOne({
            email
        })
        if(!userFinded || !bcrypt.compareSync(password, userFinded.password)){
            throw (new Error);
        }
        const token = jwt.sign({_id: userFinded._id}, SECRET_WORD);
        await User.findByIdAndUpdate(userFinded._id, {token});
        res.status(201).json({
            message: "User is logged in",
            token,
            
        })
    }
    catch(err){
        err.status = 400;
        err.message = 'Login error';
        next(err);
    }
}

module.exports = login;