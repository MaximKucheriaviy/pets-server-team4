const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidId = (req, _, next) => {
  const { noticeId } = req.params;
  if (!isValidObjectId(noticeId)) {
    const error = httpError(400, `${noticeId} is not corrent id format.`);
    next(error);
  }
  next();
};

module.exports = isValidId;
