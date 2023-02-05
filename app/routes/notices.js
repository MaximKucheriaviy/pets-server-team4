const express = require("express");

const controller = require("../controllers/notices");
const { ctrlWrapper, upload } = require("../helpers");
const { auth, isValidId, validateBody, fileLoader } = require("../middlewares");
const { schemas } = require("../models/noticeModel");

const router = express.Router();

//
router.get("/favorite", auth, ctrlWrapper(controller.getUserFavorite));
//
router.get("/categories/:type", ctrlWrapper(controller.getByCategory));
//
router.get("/:noticeId", isValidId, ctrlWrapper(controller.getById));
//
router.get("/", auth, ctrlWrapper(controller.getAllByOwner));
//
router.post(
  "/",
  auth,
  upload.single("petImage"),
  validateBody(schemas.addSchema),
  ctrlWrapper(controller.addNotice)
);
//
router.delete(
  "/:noticeId",
  auth,
  isValidId,
  ctrlWrapper(controller.removeNoticeById)
);
//
router.post(
  "/favorite/:noticeId",
  auth,
  isValidId,
  ctrlWrapper(controller.updateUserFavorite)
);
//
router.delete(
  "/favorite/:noticeId",
  auth,
  isValidId,
  ctrlWrapper(controller.updateAndRemoveFavorite)
);

module.exports = router;
