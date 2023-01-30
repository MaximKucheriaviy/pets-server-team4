const { Notice } = require("../../models/noticeModel");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Notice.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;
