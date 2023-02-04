const { Notice } = require("../../models/noticeModel");
const { User } = require("../../models/userModel");

const getUserFavorite = async (req, res) => {
  const user = await User.find({ _id: req._id });
  res.json(user);
};

module.exports = getUserFavorite;
