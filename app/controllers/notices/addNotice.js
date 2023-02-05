const { Notice } = require("../../models/noticeModel");

const addNotice = async (req, res) => {
  const { _id: owner } = req;
  const result = await await Notice.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addNotice;
