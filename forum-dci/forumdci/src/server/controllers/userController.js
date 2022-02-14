const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateToken } = require("../JWT");

/*add a new user*/
//

/*add a new user*/
async function signUpUser(req, res, next) {
  console.log("Hello New User!");
  // console.log(req.body)
  /*handle the error*/
  const { fullName, userName, email, password } = req.body;

  // console.log(fullName, userName, email, password);

  // Check if the user email and username are already taken
  const alreadyRegisteredEmail = await User.findOne({ email });
  if (alreadyRegisteredEmail) {
    res.status(404).send({
      errors: [{ msg: "This e-mail address is already registered" }],
    });
    return;
  }

  const alreadyRegisteredUser = await User.findOne({ userName });
  if (alreadyRegisteredUser) {
    res.status(404).send({
      errors: [
        {
          msg: "This userName is already registered, please choose a different userName!",
        },
      ],
    });
    return;
  }

  // ***************************************************

  // our code
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

    // *****************************

    const accessToken = jwt.sign(
      { username: user.userName, id: user._id },
      "avazsecrettoken1010",
      {
        expiresIn: "7 days",
      }
    );
    console.log("Access Token: ", accessToken);

    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        domain: "localhost",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ username: user.userName, id: user._id });
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
    return;
  }

  try {
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const accessToken = jwt.sign(
        { username: user.userName, id: user._id },
        "avazsecrettoken1010",
        {
          expiresIn: "7 days",
        }
      );
      console.log("Access Token: ", accessToken);

      return res
        .cookie("access_token", accessToken, {
          httpOnly: true,
          domain: "localhost",
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({
          username: user.userName,
          id: user._id,
        });
    } else {
      res.status(400).send("Not Allowed");
    }
  } catch (error) {
    next(error);
  }
}

/*Get the user*/

module.exports = { signUpUser, loginUser };
