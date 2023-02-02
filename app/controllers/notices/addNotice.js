const { Notice } = require("../../models/noticeModel");

const addNotice = async (req, res) => {
  // const { _id: owner } = req;
  const result = await Notice.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = addNotice;
