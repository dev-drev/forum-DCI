const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController.js");
const { userRules, validateInputs } = require("../middleware/validator.js");
const {validateUsersSignup}= require("../middleware/userRules.js")
const {getUser} = require("../controllers/adminController");
// IMPORT CONTROLLERS

// ROUTES
router.route("/signup").post(validateUsersSignup, signUpUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser);
// router.route("/update").post(validateToken, updateUser);
// router.route("/admin").post(validateToken, updateUser);

module.exports = router;
