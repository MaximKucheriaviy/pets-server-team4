const { User } = require("../../models/userModel");
const httpError = require("../../helpers/httpError");

const updateUserFavorite = async (req, res) => {
  const user = await User.findOne({ _id: req._id });
  const { favoriteNotices } = user;

  const duplicate = favoriteNotices.some(
    (e) => e.toString() === req.params.noticeId
  );

  if (duplicate) {
    throw httpError(
      403,
      `Notice with id ${req.params.noticeId} exists in favorite list!`
    );
  } else {
    const result = await User.findByIdAndUpdate(
      req._id,
      {
        $push: { favoriteNotices: req.params.noticeId },
      },
      { new: true }
    );

    res.json(result.reverse());
  }
};

module.exports = updateUserFavorite;
