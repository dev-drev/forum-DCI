const User = require("../models/User");

// async function signUpUser(req,res,next) {

//     const user= new

// }

async function loginUser(req, res, next) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).send({ message: "No user found" });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send("Success");
    } else {
      res.status(400).send("Not Allowed");
    }
  } catch (error) {
    next(error);
  }
}
