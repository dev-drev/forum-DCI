const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//comment

async function deleteUser(req, res, next) {
  try {
    //to extract token out of cookie
    //const token = req.cookies["access-token"];
    //console.log(token);
    //extract payload of token
    //const token_payload = await jwt.verify(token, process.env.JWTSECRET);
    //console.log(req.token_payload);
    const deletedUser = await User.findByIdAndDelete(req.token_payload.id);
    console.log(deletedUser);
    //if (deletedUser) {
    res.status(200).send({ deletedUser, msg: "User deleted successfully!" });
    // }
  } catch (err) {
    console.log(err);
    err.status(500);
    next(err);
  }
}

const updateUser = async (req, res, next) => {
  // We need to add JWT validations
  try {
    console.log("edit", req.body);
    const user = await User.findByIdAndUpdate(req.body.id, {
      fullName: req.body.editedUser.fullName,
      userName: req.body.editedUser.userName,
      email: req.body.editedUser.email,
      password: req.body.editedUser.password,
    });

    if (!user) {
      return res.status(404).send("user not found");
    }

    res.status(200).send(user);
  } catch (err) {
    res.status(500);
    console.log(err);
    next(err);
  }
};

const getUser = async (req, res, next) => {
  // We need to add JWT validations

  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (!user) {
      return res.status(404).send("user not found");
    }

    res.status(200).send({
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
    });
  } catch (err) {
    res.status(500);
    console.log(err);
    next(err);
  }
};

module.exports = { updateUser, getUser, deleteUser };
