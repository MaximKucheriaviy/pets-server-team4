const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const { uploadImageToStorage } = require("../../services");
const { User } = require("../../models/userModel");

const BASE_URL = "https://storage.googleapis.com/pets-project-api";

export const chageUserName = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = User.findByIdAndUpdate({ name: value });
    if (!result) {
      const err = new Error();
      err.status = 400;
      err.message = "Patch error";
    }
    res.status(201).json({
        message: "User name updated",
        data: result
    })
  } catch (err) {
    next(err);
  }
};
