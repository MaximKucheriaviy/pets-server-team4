
const ObjectId = require('mongoose').Types.ObjectId;
const { addAvatar, setAvatarURL } = require('../services');

const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const fileLoader = async (req, res, next) => {
  const { fileTypeFromFile } = await import('file-type');
  if (!req.file) {
    next();
    return;
  }
  const result = req.result;
  const { filename } = req.file;
  const URL = req.originalUrl;
  let destination = null;
  const uniqueName = ObjectId(result._id).toString().slice(0, 12);
  if (URL.length > 20) {
    destination = URL.slice(5, URL.length - 25);
  } else {
    destination = URL.slice(5, URL.length);
  }
  const meta = await fileTypeFromFile(req.file.path);
  if (!whitelist.includes(meta.mime)) {
    next(res.status(415).json({ message: 'Unsupported media type' }));
  }
  const avatar = await addAvatar(uniqueName, filename, destination);
  const avatarURL = await setAvatarURL(avatar, destination);
  req.body.avatarURL = avatarURL;
  next();
};

module.exports = fileLoader;
