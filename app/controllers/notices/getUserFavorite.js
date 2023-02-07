const { User } = require("../../models/userModel");

const getUserFavorite = async (req, res) => {
  const result = await User.findOne({ _id: req._id }).populate(
    "favoriteNotices"
  );
  res.json(result);
};

module.exports = getUserFavorite;
