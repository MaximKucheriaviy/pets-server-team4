const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const removeNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const result = await Notice.findByIdAndRemove(noticeId);
  if (!result) {
    throw httpError(404);
  }

  res.json({
    message: "Delete success",
  });
};

module.exports = removeNoticeById;
