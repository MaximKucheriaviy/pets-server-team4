// const { Notice } = require("../../models/noticeModel");
const { User } = require("../../models/userModel");

const getUserFavorite = async (req, res) => {
  // const user = await User.find({ _id: req._id }).populate("user");

  console.log(123);

  const result = await User.find().populate("notice");

  res.send(result);
};

module.exports = getUserFavorite;
