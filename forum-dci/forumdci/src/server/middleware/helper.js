const jwt = require("jsonwebtoken");

const verifyAuthToken = async (req, res, next) => {
  //extract token from the cookie
  const token = req.cookies["access-token"];
  if (!token) {
    return res
      .status(403)
      .send({ message: "You are not authorized to do this operation." });
  }

  // verify token

  try {
    const tokenData = await jwt.verify(token, process.env.JWTSECRET);
    req.tokenData = tokenData;
    res.send({ tokenData });
  } catch (err) {
    next(err);
  }

  next();
};

module.exports = { verifyAuthToken };
