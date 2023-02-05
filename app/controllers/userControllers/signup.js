const {User} = require("../../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {SECRET_WORD} = process.env;

const signup = async(req, res,next ) => {
   
  const { name, email, password, phone, city } = req.body;
 
  try{
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({
      name,
      email,
      password: hashedPassword,
      city,
      phone   
    })
  
    if (!result) {
      const err = new Error;
      err.status = 400;
      err.message = "User creation error";
      throw (err);
    }


    const token = jwt.sign({
      _id: result._id
    }, SECRET_WORD);

    await User.findByIdAndUpdate(result._id, {
      token
    })
  
    result.setPassword(password);
    result.save();

    res.status(201).json({
      status: "Created",
      message: "user created",
token,

      code: 201,
      data: {
        user: {
          email,
          name,
          phone,
          city,
          token
        },
      },
    });
  }
  catch (err) {
       err.status = 400;
        err.message = "User creation error";
    next(err);
  }
 
}

module.exports = signup;