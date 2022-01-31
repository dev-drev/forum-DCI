const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

// this allows to create a token and set the token to the user browser
// The token is completely encrypted

const createToken = (user) => {
  // create token --> we need to arguments
  // The first one is the Payload, the data we need
  // The second one is the secret
  const accessToken = sign(
    { username: user.userName, id: user.id },
    process.env.JWTSECRET
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken) {
    return res.status(400).json({ error: "user not authenticated" });
  }

  try {
    const validateToken = verify(accessToken, process.env.JWTSECRET);

    if (validateToken) {
      req.authenticated = true;
      return next();
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

//verify token for deleting user

// const verifyAccess = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     jwt.verify(token, "JWTSECRET", (err, user) => {
//       if (err) {
//         return res.status(401).json("Token is not valid");
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.status(401).json("you are not authorized");
//   }
// };

module.exports = { createToken, validateToken };
