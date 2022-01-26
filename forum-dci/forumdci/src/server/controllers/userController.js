const User = require("../models/User");
const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");

/*add a new user*/
 async function signUpUser(req, res, next) {
    console.log("Hello New User!");
     console.log(req.body)
    /*handle the error*/
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).send(err)
        }

        const {fullName, username, email, password} = req.body;
        console.log(fullName, username, email, password)
        const response = await User.create({
            fullName,
            username,
            email,
            password: await encryptingPassword(password)
        })

        /*returning "response" will expose the user, that is not safe*/
        res.status(200).send(response);
    } catch(err) {
        console.log(err);
        next(err);
    }
}

/*encrypting the password*/
const encryptingPassword = (password) => {
    return new Promise ((resolve, reject) => {
        bcrypt.hash(password,10,(err,hash) =>{
            if(err) {
                reject(err);
            } else {
                resolve(hash)
            }
        })
    })
}

async function loginUser(req, res, next) {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) {
        res.status(404).send({message: "No user found"});
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

module.exports = {signUpUser, loginUser}