const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config;

const { SECRET_WORD } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer") {
      res.status(401).json({
        status: "error",
        code: 401,
        message: "Not authorized",
      });
    }
    const { _id } = jwt.verify(token, SECRET_WORD);
    const user = await User.User.findById(_id);

    if (!user || !user.token) {
      res.status(401).json({
        status: "error",
        code: 401,
        message: "Not authorized",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.message === "invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
