const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const removeNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const { _id } = req;
  const result = await Notice.findById(noticeId);
  if (!result || result.owner != _id) {
    throw httpError(404);
  }
  await Notice.findByIdAndRemove(noticeId);
  res.json({
    message: "Delete success",
  });
};

module.exports = removeNoticeById;
