const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");
const { deleteImageFromStorage } = require("../../services");

const removeNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const { _id } = req;

  const result = await Notice.findById(noticeId);

  if (!result || result.owner != _id) {
    throw httpError(404);
  }

  await Notice.findByIdAndRemove(noticeId);

  if (result.imageURL) {
    const filePath = result.imageURL.slice(48);
    await deleteImageFromStorage(filePath);
  }

  res.json({
    message: "Deleted successful",
    result,
  });
};

module.exports = removeNoticeById;
