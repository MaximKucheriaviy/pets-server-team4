const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Notice.findByIdAndRemove(id);
  if (!result) {
    throw httpError(404);
  }

  res.json({
    message: "Delete success",
  });
};

module.exports = removeById;
