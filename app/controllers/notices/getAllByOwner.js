const { Notice } = require("../../models/noticeModel");

const getAllByOwner = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Notice.find({ owner }, "", { skip, limit });
  res.json(result);
};

module.exports = getAllByOwner;
