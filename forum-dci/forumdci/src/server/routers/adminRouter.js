const express = require("express");
const router = express.Router();
const { createToken, validateToken } = require("../JWT");

const {
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/adminController");

// const { updateUser,getUser} = require('../controllers/adminController');
const { verifyAuthToken } = require("../middleware/helper");

// IMPORT CONTROLLERS

// ROUTES

router.delete("/delete", deleteUser);

// router.route("/edit").patch(validateToken, updateUser);

// router.route("/edit").patch(updateUser);

router.route("/getuser/:id").get(getUser);

module.exports = router;
