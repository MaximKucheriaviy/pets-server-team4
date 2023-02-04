const fs = require("fs/promises");
const BASE_URL = "https://storage.googleapis.com/pets-project-api";
const { uploadImageForNotice } = require("../../services");
const { Notice } = require("../../models/noticeModel");

const addNotice = async (req, res) => {
  try {
    const { _id: owner } = req;

    if (!req.file) {
      const result = await Notice.create({ ...req.body, owner });
      res.status(201).json(result);
      return;
    }

    const { path: tempUpload, originalname } = req.file;

    const fileName = `${owner}_${originalname}`;
    const imageURL = `${BASE_URL}/${fileName}`;

    const result = await Notice.create({ ...req.body, owner, imageURL });

    await uploadImageForNotice(originalname, fileName);
    await fs.unlink(req.file.path);
    res.status(201).json(result);
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = addNotice;
