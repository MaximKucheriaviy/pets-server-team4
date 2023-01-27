const express = require('express');
const { signup, login, logout, current } = require('../controllers/userControllers');
const {validator, auth} = require('../middlewares');

const router = express.Router();

router.post("/signup", validator.singupValidation, signup);
router.post("/login", validator.loginValidator, login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);


module.exports = router;