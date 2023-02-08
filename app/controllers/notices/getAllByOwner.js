const { Notice } = require("../../models/noticeModel");

const getAllByOwner = async (req, res) => {
  const { _id: owner } = req;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Notice.find({ owner }, "", { skip, limit });
  res.json(result.reverse());
};

module.exports = getAllByOwner;
