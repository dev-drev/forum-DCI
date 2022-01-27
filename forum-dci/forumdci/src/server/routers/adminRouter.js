const express = require("express");
const router = express.Router();

const {
 
  updateUser,
  
} = require('../controllers/adminController')

// IMPORT CONTROLLERS

// ROUTES
// app.use(/admin)

router
  .route("/:id")
  // .get(getUser)
  // .delete(deleteUser)
  // .post(logoutUser);

  router
  .route("/edit")
  .patch(updateUser)

  module.exports = router;