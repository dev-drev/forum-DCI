const express = require("express");
const router = express.Router();

const { createToken, validateToken } = require("../JWT");

const {
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/adminController");

// IMPORT CONTROLLERS

// ROUTES

router.delete("/delete", validateToken, deleteUser);

router.route("/edit").patch(validateToken, updateUser);

router.route("/edit").patch(updateUser);

router.route("/getuser/:id").get(getUser);

module.exports = router;
