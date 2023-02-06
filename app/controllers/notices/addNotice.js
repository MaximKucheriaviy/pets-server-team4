const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const { uploadImageToStorage } = require("../../services");
const { Notice } = require("../../models/noticeModel");

const BASE_URL = "https://storage.googleapis.com/pets-project-api";

const addNotice = async (req, res) => {
  try {
    const { _id: owner } = req;

    if (!req.file) {
      const result = await Notice.create({ ...req.body, owner });
      res.status(201).json(result);
      return;
    }

    const { path: tempUpload, originalname } = req.file;

    const fileName = `${nanoid()}_${originalname}`;
    const imageURL = `${BASE_URL}/${fileName}`;

    const result = await Notice.create({ ...req.body, owner, imageURL });

    if (!result) {
      res.status(500).json({
        code: 500,
        status: "Failed",
        message: "Upload image failed, try again",
      });
    }

    await uploadImageToStorage(originalname, fileName);

    await fs.unlink(req.file.path);
    res.status(201).json(result);
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = addNotice;
