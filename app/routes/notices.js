const express = require("express");

const controller = require("../controllers/notices");
const { ctrlWrapper } = require("../helpers");
const { auth, isValidId } = require("../middlewares");

const router = express.Router();

router.get("/categories/:type", ctrlWrapper(controller.getByCategory));
router.get("/:noticeId", isValidId, ctrlWrapper(controller.getById));
router.post("/", ctrlWrapper(controller.addNotice));
router.get("/", ctrlWrapper(controller.getAllByOwner));
router.delete(
  "/:noticeId",
  isValidId,
  ctrlWrapper(controller.removeNoticeById)
);

module.exports = router;
