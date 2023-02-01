const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { type: category } = req.params;
  const result = await Notice.find({ category });
  console.log("category");

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = getByCategory;
