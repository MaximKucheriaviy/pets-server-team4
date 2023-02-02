const { User } = require("../../models/userModel");

const updateUserFavorite = async (req, res) => {
  const user = await User.find({ _id: req._id });

  const result = await User.findByIdAndUpdate(
    user,
    {
      $push: { favoriteNotices: req.params.noticeId },
    },
    { new: true }
  );
  res.send(result);
};

module.exports = updateUserFavorite;
