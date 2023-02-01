const { Notice } = require("../../models/noticeModel");

const getAllByFav = async (req, res) => {
  const { favourite } = req.user;

  const result = await Notice.find({ favourite });

  res.json(result);
};

module.exports = getAllByFav;
