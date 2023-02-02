const { Schema, model } = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const { handleSchemaValidationErrors } = require("../helpers");

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for your notice"],
    },
    name: {
      type: String,
      required: [true, "Set name of your pet"],
    },
    birthdate: {
      type: String,
      required: [true, "Set your pet's birthdate"],
    },
    breed: {
      type: String,
    },
    place: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: [true, "Set sex of your pet"],
      enum: ["female", "male"],
    },
    // email: {
    //   type: String,
    //   required: [true, "Set your email"],
    // },
    // phone: {
    //   type: String,
    //   required: [true, "Set your phone number"],
    // },
    price: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    comment: {
      type: String,
      required: [true, "Set comments about your pet"],
    },
    category: {
      type: String,
      required: [true, "Set category of your notice"],
      enum: ["sell", "lost-found", "in-good-hands"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

noticeSchema.post("save", handleSchemaValidationErrors);

const addSchema = Joi.object({
  title: Joi.string(),
  name: Joi.string()
    .required()
    .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/)
    .min(2),
  birthdate: Joi.date().format("DD.MM.YYYY").required().messages({
    "date.format": " Please, type in DD.MM.YYYY format",
  }),
  breed: Joi.string(),
  place: Joi.string().required(),
  sex: Joi.string().valid("male", "female").required(),
  // email: Joi.string()
  //   .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  //   .required(),
  // phone: Joi.number().required().min(5).max(16).integer(),
  price: Joi.number().greater(0).integer(),
  imageURL: Joi.string(),
  comment: Joi.string()
    .regex(/^[0-9a-zA-Zа-яА-ЯёЁіІїЇєЄ!@#$%^&+=*,:;><'"~`?_\-()\/.|\s]{8,120}$/)
    .required(),
  category: Joi.string()
    .valid("sell", "lost-found", "in-good-hands")
    .required(),
});

const schemas = { addSchema };

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
