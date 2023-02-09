const express = require('express');


const { signup, login, logout, current, chageUserName, chageUserEmail, chageUserPhone, chageUserBirthday, chageUserCity, chageUserAvatart} = require('../controllers/userControllers');
const { auth, validation} = require('../middlewares');
const { upload } = require("../helpers");



const shemas = require('../models/userModel')

const router = express.Router();

router.post("/signup", validation(shemas.schemas.joiRegisterSchema), signup);
router.post("/login",validation(shemas.schemas.joiLoginSchema), login);
router.get("/logout", auth, logout);
router.get("/current", auth, current);
router.patch("/name", auth, chageUserName);
router.patch("/email", auth, chageUserEmail);
router.patch("/phone", auth, chageUserPhone);
router.patch("/birthday", auth, chageUserBirthday);
router.patch("/city", auth, chageUserCity);
router.patch("/avatar", auth, upload.single("avatar"), chageUserAvatart);

module.exports = router;