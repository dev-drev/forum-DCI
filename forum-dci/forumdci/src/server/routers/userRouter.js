const express = require("express");

const router = express.Router();

// IMPORT CONTROLLERS

// ROUTES
// app.use(/users)

// router.route('/').get(getUsers)
router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);
