const express = require("express");
const router = express.Router();

const { createToken, validateToken } = require("../JWT");

const {
 
  updateUser,
  
} = require('../controllers/adminController')

// IMPORT CONTROLLERS

// ROUTES


router
  .route("/:id")

  // .get(getUser)
  // .delete(deleteUser)
  // .post(logoutUser);

  router
  .route("/edit")
  .patch(validateToken, updateUser)

  module.exports = router;
