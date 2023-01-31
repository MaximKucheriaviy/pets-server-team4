const express = require("express");

const controller = require("../../controllers/notices");
const { ctrlWrapper } = require("../../helpers");
const { auth, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/:category", ctrlWrapper(controller.getByCategory));
router.get("/:noticeId", isValidId, ctrlWrapper(controller.getById));

module.exports = router;
