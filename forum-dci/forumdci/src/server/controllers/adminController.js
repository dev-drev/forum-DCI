const User = require("../models/User");

// ---------delete a User------------------------
async function deleteUser(req, res, next) {
  try {
    const deletedUser = await User.findOneAndDelete(req.params.uid);
    if (deletedUser) {
      res.status(200).send({ deletedUser, msg: "User deleted successfully!" });
    }
  } catch (err) {
    console.log(err);
    err.status(500);
    next(err);
  }
}

module.exports = { deleteUser };
