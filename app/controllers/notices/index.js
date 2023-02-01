const addToFavorite = require("./addToFavorite");
const getAll = require("./getAll");
const removeById = require("./removeById");
const getByCategory = require("./getByCategory");
const getById = require("./getById");
const addNotice = require("./addNotice");
const getAllByOwner = require("./getAllByOwner");
const removeNoticeById = require("./removeNoticeById");

module.exports = {
  getByCategory,
  getById,
  addToFavorite,
  getAll,
  removeById,
  addNotice,
  getAllByOwner,
  removeNoticeById,
};
