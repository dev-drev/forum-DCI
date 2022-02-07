const express = require("express");
const router = express.Router();

// IMPORT CONTROLLERS
const {
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/adminController");



// ROUTES
router.route("/delete").delete(deleteUser);
router.route("/edit").patch(updateUser);
router.route("/getuser/:id").get(getUser);

module.exports = router;
