const express = require("express");
const router = express.Router();
const {
  deleteUser,
  getUser,
  updateUser,
  // logoutUser,
} = require("../controllers/adminController");

const { validateToken } = require("../JWT");

// IMPORT CONTROLLERS

// ROUTES
router.delete("/delete", validateToken, deleteUser);
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

//router.route("/edit").patch(updateUser);

//router.route("/getuser/:id").get(getUser);

module.exports = router;
