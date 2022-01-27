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

  const alreadyRegistered = await User.findOne({ email });
  if (alreadyRegistered) {
    res.status(404).send("This e-mail address is already registered");
  }

  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).send(err);
    }
    const response = await User.create({
      fullName,
      userName,
      email,
      password: await encryptingPassword(password),
    });

    /*returning "response" will expose the user, that is not safe*/
    res.status(200).send(response);
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

async function loginUser(req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).send({ message: "No user found" });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = createToken(user);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });

      console.log(accessToken);

      res.status(200).send("Success");
    } else {
      res.status(400).send("Not Allowed");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { signUpUser, loginUser };
