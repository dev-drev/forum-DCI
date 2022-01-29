const express = require("express");

const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");

// IMPORT CONTROLLERS

// ROUTES
router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);
// router.route("/update").post(validateToken, updateUser);
// router.route("/admin").post(validateToken, updateUser);

module.exports = router;
