const fs = require("fs/promises");
const path = require("path");
const BASE_URL = "https://storage.cloud.google.com/pets-project-api/undefined";

const { Notice } = require("../../models/noticeModel");
const { uploadImage, getImageUrl } = require("../../services");

const addNotice = async (req, res) => {
  try {
    const { _id: owner } = req;
    const { path: tempUpload, originalname } = req.file;

    console.log("path", tempUpload);

    console.log("_id", owner);
    console.log(req.body);

    const fileName = `${owner}_${originalname}`;
    console.log("fileName", fileName);
    const imageURL = `${BASE_URL}/${fileName}`;
    const result = await await Notice.create({
      ...req.body,
      owner,
      imageURL,
    });

    await uploadImage(originalname, fileName);
    res.status(201).json(result);
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = addNotice;
