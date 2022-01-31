const User = require("../models/User");

// ---------delete a User------------------------
async function deleteUser(req, res, next) {
  try {
    const deletedUser = await User.findOneAndDelete(req.params.id);
    if (deletedUser) {
      res.status(200).send({ deletedUser, msg: "User deleted successfully!" });
    }
  } catch (err) {
    console.log(err);
    err.status(500);
    next(err);
  }
}

// async function deleteUser(req, res, next) {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }http://localhost:3000/admin/delete/61f3c8ad5315c4840fcfa846
// }

module.exports = { deleteUser };
