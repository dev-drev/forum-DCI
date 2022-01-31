const express = require("express");
const router = express.Router();

const { createToken, validateToken } = require("../JWT");


const {
 
  updateUser,
  getUser
  
} = require('../controllers/adminController')


// IMPORT CONTROLLERS

// ROUTES

router.route("/:id");

// .get(getUser)
// .delete(deleteUser)
// .post(logoutUser);

router.route("/edit").patch(validateToken, updateUser);


  router
  .route("/edit")
  .patch(updateUser)

  router
  .route("/getuser/:id")
  .get(getUser);

  module.exports = router;

