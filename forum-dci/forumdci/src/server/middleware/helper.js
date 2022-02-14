const jwt = require("jsonwebtoken");

const verifyAuthToken = async (req, res, next) => {
    // verify token

  try {
  //extract token from the cookie
  const token = req.cookies["access_token"];
  console.log('verifyToken', token, req.cookies);
  if (!token) {
    return res
      .status(403)
      .send({ message: "You are not authorized to do this operation." });
  }


    console.log('token in try', token)
    jwt.verify(token, "avazsecrettoken1010", (err, encoded) => {
      if (err) throw err;
      req.tokenData = encoded;
      console.log(encoded);
      next();
    });
  } catch (err) {
    console.log(err)
    next(err);
  }
};

module.exports = { verifyAuthToken };
