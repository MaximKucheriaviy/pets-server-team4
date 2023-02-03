const express = require("express");

const controller = require("../controllers/notices");
const { ctrlWrapper } = require("../helpers");
const { auth, isValidId, validateBody } = require("../middlewares");
const { schemas } = require("../models/noticeModel");

const router = express.Router();

router.get("/categories/:type", ctrlWrapper(controller.getByCategory));
router.get("/:noticeId", isValidId, ctrlWrapper(controller.getById));
router.get("/", auth, ctrlWrapper(controller.getAllByOwner));
router.post(
  "/",
  auth,
  validateBody(schemas.addSchema),
  ctrlWrapper(controller.addNotice)
);
router.delete(
  "/:noticeId",
  auth,
  isValidId,
  ctrlWrapper(controller.removeNoticeById)
);

//
router.get("/favorite", auth, controller.getUserFavorite);
//
router.post("/favorite/:noticeId", auth, controller.updateUserFavorite);
//
router.delete("/favorite/:noticeId", auth, controller.updateAndRemoveFavorite);

module.exports = router;
