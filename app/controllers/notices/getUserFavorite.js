const { User } = require("../../models/userModel");

const getUserFavorite = async (req, res) => {
  const result = await User.find({ _id: req._id }).populate(
    "favoriteNotices"
  );
  res.json(result.reverse());
};

module.exports = getUserFavorite;
