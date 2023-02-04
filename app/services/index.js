const petsService = require("./petsService");
const { addAvatar, setAvatarURL } = require("./uploadService");
const { uploadImage, deleteImage, getAvatarUrl } = require("./google-cloud");
const { uploadImageForNotice, getImageUrl } = require("./imagesCloud");

module.exports = {
  petsService,
  addAvatar,
  setAvatarURL,
  uploadImage,
  deleteImage,
  getAvatarUrl,
  uploadImageForNotice,
  getImageUrl,
};
