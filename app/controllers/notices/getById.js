const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const getById = async (req, res) => {
  const { noticeId } = req.params;

  const result = await Notice.findById(noticeId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = getById;
