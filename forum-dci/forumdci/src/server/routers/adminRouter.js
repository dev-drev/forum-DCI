const express = require("express");
const router = express.Router();

// IMPORT CONTROLLERS

// ROUTES
// app.use(/admin)

router
  .route("/:id")
  .get(getUser)
  .delete("/delete/:uid", deleteUser)
  .put(updateUser)
  .post(logoutUser);

module.exports = router;
