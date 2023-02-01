const express = require("express");

const controller = require("../../controllers/notices");
const { ctrlWrapper } = require("../../helpers");
const { auth, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/:category", ctrlWrapper(controller.getByCategory));
router.get("/:noticeId", isValidId, ctrlWrapper(controller.getById));

router.get("/", auth, ctrlWrapper(controller.getAllByFav));

router.patch(
  "/:noticeId/favorite",
  isValidId,
  ctrlWrapper(controller.addToFavorite)
);

router.delete(
  "/:noticeId",
  auth,
  isValidId,
  ctrlWrapper(controller.removeById)
);

module.exports = router;
