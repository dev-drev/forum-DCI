const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.cookie.access_token;

  if (!token) {
    return res.status(403).send({ message: "Not authorized" });
  }
  try {
    const tokenData = await jwt.verify(token, "avazsecrettoken1010");
    res.send({ tokenData });
  } catch (error) {
    next(error);
  }
};

module.exports = { validateToken };
