const express = require('express');


const { signup, login, logout, current} = require('../controllers/userControllers');
const { auth, validation} = require('../middlewares');


const shemas = require('../models/userModel')

const router = express.Router();

router.post("/signup", validation(shemas.schemas.joiRegisterSchema), signup);
router.post("/login",validation(shemas.schemas.joiLoginSchema), login);
router.get("/logout", auth, logout);
router.get("/current", auth, current);


module.exports = router;