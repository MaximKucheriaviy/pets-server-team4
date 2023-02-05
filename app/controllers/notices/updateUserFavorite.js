const { User } = require("../../models/userModel");

const updateUserFavorite = async (req, res) => {
  const result = await User.findByIdAndUpdate(
    req._id,
    {
      $push: { favoriteNotices: req.params.noticeId },
    },
    { new: true }
  );
  res.json(result);
};

module.exports = updateUserFavorite;
