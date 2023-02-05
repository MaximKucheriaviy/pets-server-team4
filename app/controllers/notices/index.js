const updateUserFavorite = require("./updateUserFavorite");
const getUserFavorite = require("./getUserFavorite");
const updateAndRemoveFavorite = require("./updateAndRemoveFavorite");
const getByCategory = require("./getByCategory");
const getById = require("./getById");
const addNotice = require("./addNotice");
const getAllByOwner = require("./getAllByOwner");
const removeNoticeById = require("./removeNoticeById");

module.exports = {
  getByCategory,
  getById,
  updateUserFavorite,
  getUserFavorite,
  updateAndRemoveFavorite,
  addNotice,
  getAllByOwner,
  removeNoticeById,
};
