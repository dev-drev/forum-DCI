const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { createToken, validateToken } = require("../JWT");

/*add a new user*/
async function signUpUser(req, res, next) {
  console.log("Hello New User!");
  // console.log(req.body)
  /*handle the error*/
  const { fullName, userName, email, password } = req.body;
  console.log(fullName, userName, email, password);

  const alreadyRegisteredEmail = await User.findOne({ email });
  if (alreadyRegisteredEmail) {
    res.status(404).send("This e-mail address is already registered");
    return;
  }

  const alreadyRegisteredUser = await User.findOne({ userName });
  if (alreadyRegisteredUser) {
    res
      .status(404)
      .send(
        "This userName is already registered, please choose a different userName!"
      );
    return;
  }

  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).send(err);
    }
    const user = await User.create({
      fullName,
      userName,
      email,
      password: await encryptingPassword(password),
    });

    if (!user) {
      res.status(500).send("Not able to create the user");
      return;
    }

    const accessToken = createToken(user);
    res.cookie("access-token", accessToken, {
      maxAge: 3600 * 24 * 30,
      domain: "localhost", // http://avaaz.com
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production",
    });

    /*returning "response" will expose the user, that is not safe*/
    res.status(200).send({
      message: `Hello ${user.userName}`,
      user: { username: user.userName, id: user._id },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

/*encrypting the password*/
const encryptingPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

/*Login user*/
async function loginUser(req, res, next) {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  console.log("user:", user);
  if (!user) {
    res.status(404).send({ message: "No user found" });
  }

  try {
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const accessToken = createToken(user);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });

      console.log(accessToken);

      res.status(200).json({
        msg: "Success",
        token: accessToken,
        user: { username: user.userName, userId: user.id },
      });
    } else {
      res.status(400).send("Not Allowed");
    }
  } catch (error) {
    next(error);
  }
}

/*Logout user*/

module.exports = { signUpUser, loginUser };
