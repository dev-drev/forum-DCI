const express = require("express");

const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");
const { createToken, validateToken } = require("../JWT");

// IMPORT CONTROLLERS

// ROUTES
router.route("/signup").post(signUpUser);
router.route("/login").post(validateToken, loginUser);

module.exports = router;
