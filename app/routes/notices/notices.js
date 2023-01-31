const express = require("express");

const controller = require("../../controllers/notices");
const { ctrWrapper } = require("../../helpers");
const { auth, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/:category", ctrWrapper(controller.getByCategory));
router.get("/:noticeId", isValidId, ctrWrapper(controller.getById));

module.exports = router;
