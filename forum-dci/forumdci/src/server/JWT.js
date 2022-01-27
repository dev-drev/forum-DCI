const {sign, verify} = require("jsonwebtoken");

// this allows to create a token and set the token to the user browser
// The token is completely encrypted

const createToken = (user) => {
    // create token --> we need to arguments
    // The first one is the Payload, the data we need
    // The second one is the secret
    const accessToken = sign(
        {username: user.userName, id: user.id},
        process.env.JWTSECRET
    );

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

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
    }
};

module.exports = {createToken, validateToken};
