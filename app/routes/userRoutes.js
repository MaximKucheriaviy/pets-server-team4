const express = require('express');
const { signup, login, logout, current} = require('../controllers/userControllers');

const {auth} = require('../middlewares');


const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);


module.exports = router;