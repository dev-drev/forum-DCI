const express = require("express");

const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");
const { createToken, validateToken } = require("../JWT");

// IMPORT CONTROLLERS

// ROUTES
router.route("/signup").post(createToken, signUpUser);
router.route("/login").post(createToken, loginUser);
// router.route("/update").post(validateToken, updateUser);

module.exports = router;
