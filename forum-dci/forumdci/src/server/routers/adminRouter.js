const express = require("express");
const router = express.Router();
const {verifyAuthToken} = require("../middleware/helper")

// IMPORT CONTROLLERS
const {
  deleteUser,
  getUser,
  updateUser,
  uploadPicture,
  uploadPictureMiddleware
} = require("../controllers/adminController");

 router.use(verifyAuthToken)

// ROUTES
router.route("/delete").delete(deleteUser);
router.route("/edit").patch(updateUser);
router.route("/getuser/:id").get(getUser);

//upload picture route 
// !add the auth before uploadPictureMiddleware later

router.route("/upload").post(uploadPictureMiddleware, uploadPicture, (error, req, res, next) => {
  res.status(400).send({error: error.message});
})



module.exports = router;
