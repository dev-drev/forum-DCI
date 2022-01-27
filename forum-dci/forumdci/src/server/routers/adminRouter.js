const express = require("express");
const {
  deleteUser,
  // getUser,
  // updateUser,
  // logoutUser,
} = require("../controllers/adminController");
const router = express.Router();

// IMPORT CONTROLLERS

// ROUTES
// app.use(/admin)

router
  .route("/:id")
  // .get(getUser)
  .delete(deleteUser);
// .put(updateUser)
// .post(logoutUser);

module.exports = router;
