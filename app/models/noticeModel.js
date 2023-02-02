const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSchemaValidationErrors } = require("../helpers");

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for notice"],
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
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
      required: true,
      enum: ["female", "male"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    imageURL: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["sell", "lostFound", "inGoodHands"],
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

const schemas = {};

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
