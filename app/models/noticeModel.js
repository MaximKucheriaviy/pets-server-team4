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
      default: "love",
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
    price: {
      type: String,
      default: null,
    },
    imageURL: {
      type: String,
      default: "",
    },
    comment: {
      type: String,
      required: [true, "Set comments about your pet"],
    },
    category: {
      type: String,
      required: [true, "Set category of your notice"],
      enum: ["sell", "lost-found", "for-free"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
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
  price: Joi.number().greater(0).integer(),
  comment: Joi.string()
    .regex(/^[0-9a-zA-Zа-яА-ЯёЁіІїЇєЄ!@#$%^&+=*,:;><'"~`?_\-()\/.|\s]{8,120}$/)
    .required(),
  category: Joi.string().valid("sell", "lost-found", "for-free").required(),
});

const schemas = { addSchema };

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
