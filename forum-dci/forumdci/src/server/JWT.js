const {sign, verify} = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

// this allows to create a token and set the token to the user browser
// The token is completely encrypted

const createToken = (user) => {
    // create token --> we need to arguments
    // The first one is the Payload, the data we need
    // The second one is the secret
    const accessToken = sign(
        {username: user.userName, id: user._id},
        process.env.JWTSECRET
    );

    return accessToken;
};

/*const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    console.log(accessToken);

    if (!accessToken) {
        return res.status(400).json({error: "user not authenticated"});
    }

    try {
        const validateToken = verify(accessToken, process.env.JWTSECRET);

        if (validateToken) {
            req.authenticated = true;
            return next();
        }
        next();
    } catch (error) {
        return res.status(400).json({error: error});
    }*/

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
