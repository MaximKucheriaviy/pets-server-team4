const {Schema, model} = require('mongoose');
const Joi = require("joi");
const bcrypt = require("bcrypt");

const emailRegexp =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const phoneReqexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
         match: emailRegexp,
      unique: true,
        required: [true, "Email is required"],
    },
  password: {
    minlength: 7,
  
        type: String,
      required: [true, "Set password for user"],
  },
  city: {
      type: String,
        required: true,
  },

      avatarURL: {
      type: String,
   requireda: true,
    },

  phone: {
     match: phoneReqexp,
      type: String,
        required: true,
  },

  birthday: {
      type: String,

        default: null,
  },
  
  token: {
      type: String,
      default: null,
    },
},
  { versionKey: false, timestamps: true }
)

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10)
  );
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const joiRegisterSchema = Joi.object({
  password: Joi.string().min(7).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  name: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().pattern(phoneReqexp).required(),
  token: Joi.string(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().min(7).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  joiRegisterSchema,
  joiLoginSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  schemas,
};