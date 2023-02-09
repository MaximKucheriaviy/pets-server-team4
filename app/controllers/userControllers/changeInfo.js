const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const { uploadImageToStorage } = require("../../services");
const { User } = require("../../models/userModel");

const BASE_URL = "https://storage.googleapis.com/pets-project-api";

const chageUserName = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = await User.findByIdAndUpdate(req._id, { name: value });
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


const chageUserEmail = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = await User.findByIdAndUpdate(req._id, { email: value });
    if (!result) {
      const err = new Error();
      err.status = 400;
      err.message = "Patch error";
    }
    res.status(201).json({
        message: "User email updated",
        data: result
    })
  } catch (err) {
    next(err);
  }
};

const chageUserPhone = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = await User.findByIdAndUpdate(req._id, { phone: value });
    if (!result) {
      const err = new Error();
      err.status = 400;
      err.message = "Patch error";
    }
    res.status(201).json({
        message: "User phone updated",
        data: result
    })
  } catch (err) {
    next(err);
  }
};

const chageUserBirthday = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = await User.findByIdAndUpdate(req._id, { birthday: value });
    if (!result) {
      const err = new Error();
      err.status = 400;
      err.message = "Patch error";
    }
    res.status(201).json({
        message: "User birthday updated",
        data: result
    })
  } catch (err) {
    next(err);
  }
};


const chageUserCity = async (req, res, next) => {
  const { value } = req.body;
  if (!value) {
    const err = new Error();
    err.status = 400;
    err.message = "No value";
  }
  try {
    const result = await User.findByIdAndUpdate(req._id, { city: value });
    if (!result) {
      const err = new Error();
      err.status = 400;
      err.message = "Patch error";
    }
    res.status(201).json({
        message: "User city updated",
        data: result
    })
  } catch (err) {
    next(err);
  }
};


module.exports = {
  chageUserName,
  chageUserEmail,
  chageUserPhone,
  chageUserBirthday,
  chageUserCity,
}
