const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const addToFavorite = async (res, req) => {
  const { id } = req.params;

  const result = await Notice.findByIdAndUpdate(id, req.body, { new: true });

  if (!res.body.hasOwnProperty("favorite")) {
    return res.status(400).json({ message: "missing field favorite" });
  }

  if (!result) {
    throw httpError(404);
  }

  res.json(result);
};

module.exports = addToFavorite;
