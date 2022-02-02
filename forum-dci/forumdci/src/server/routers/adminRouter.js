const express = require("express");
const router = express.Router();
// const { createToken, validateToken } = require("../JWT");

const { updateUser,getUser} = require('../controllers/adminController');
const {verifyAuthToken} = require('../middleware/helper');

// IMPORT CONTROLLERS

// ROUTES

router.route("/:id");

// .get(getUser)
// .delete(deleteUser)
// .post(logoutUser);

  router
  .route("/edit")
  .patch(updateUser)  
  //.patch(verifyAuthToken, updateUser);

  router
  .route("/getuser/:id")
  .get(getUser); 
   //.get(verifyAuthToken, getUser); 

  module.exports = router;
