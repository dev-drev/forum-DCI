const express = require("express");

const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");
// IMPORT CONTROLLERS

// ROUTES
// app.use(/users)

// router.route('/').get(getUsers)
router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);
//

module.exports = router;
