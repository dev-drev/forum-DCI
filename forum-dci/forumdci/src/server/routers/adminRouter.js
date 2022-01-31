const express = require("express");
const router = express.Router();
const {
  deleteUser,
  // getUser,
  //updateUser,
  // logoutUser,
} = require("../controllers/adminController");

const { validateToken } = require("../JWT");

// IMPORT CONTROLLERS

// ROUTES

router
  .route("/delete/:id")
  // .get(getUser)
  .delete(deleteUser);
// .put(updateUser)
// .post(logoutUser);

// .get(getUser)
// .delete(deleteUser)
// .post(logoutUser);

//router.route("/edit").patch(validateToken, updateUser);

module.exports = router;
