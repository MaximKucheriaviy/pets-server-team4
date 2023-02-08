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
      default: "",
    },
    birthdate: {
      type: String,
      default: "",
    },
    breed: {
      type: String,
      default: "lucky",
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
      default: "",
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
  birthdate: Joi.string(),
  title: Joi.string().required(),
  name: Joi.string(),
  breed: Joi.string(),
  place: Joi.string().required(),
  sex: Joi.string().required(),
  price: Joi.string(),
  comment: Joi.string(),
  category: Joi.string().valid("sell", "lost-found", "for-free").required(),
});

const schemas = { addSchema };

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
