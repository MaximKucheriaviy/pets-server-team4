const { Notice } = require("../../models/noticeModel");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Notice.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addNotice;
