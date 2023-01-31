const { Notice } = require("../../models/noticeModel");

const getAll = async (req, res) => {
  const { favorite } = req.user;

  const result = await Notice.find({ favorite });

  res.json(result);
};

module.exports = getAll;
