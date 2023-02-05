const {User} = require('../../models/userModel');

const logout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req._id, { token: null });
    res.json({
      message: "The user is logged out",
    });
  } catch (err) {
     res.json({
            message: 'Missing header with authorization token',
        
        })
    next(err);
  }
};

module.exports = logout;
