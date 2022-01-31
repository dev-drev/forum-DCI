const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");
const { userRules, validateInputs } = require("../middleware/validator.js");

// IMPORT CONTROLLERS

// ROUTES
router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);
// router.route("/update").post(validateToken, updateUser);
// router.route("/admin").post(validateToken, updateUser);

module.exports = router;
