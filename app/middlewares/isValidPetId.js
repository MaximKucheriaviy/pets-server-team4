const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidId = (req, _, next) => {
  const { petID } = req.params;
  if (!isValidObjectId(petID)) {
    const error = httpError(400, `${petID} is not corrent id format.`);
    next(error);
  }
  next();
};

module.exports = isValidId;
