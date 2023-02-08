const { User } = require("../../models/userModel");

const updateAndRemoveFavorite = async (req, res) => {
  const result = await User.findByIdAndUpdate(
    req._id,
    {
      $pull: { favoriteNotices: req.params.noticeId },
    },
    { new: true }
  );
  res.json(result.reverse());
};

module.exports = updateAndRemoveFavorite;
