const User = require('../models/User')
const mongoose = require('mongoose');

const updateUser = async (req, res, next) => {
// We need to add JWT validations
    console.log("helooooooooooo");

    try {
        console.log("helooooooooooo before try");
        const user = await User.findByIdAndUpdate(req.body.id, {
            fullName: req.body.editedUser.fullName,
            userName: req.body.editedUser.userName,
            email: req.body.editedUser.email,
            password: req.body.editedUser.password
        })

        if (!user) {
            return res.status(404).send('user not found')
        }

        res.status(200).send(user)

    } catch (err) {
        console.log("helooooooooooo");

        res.status(500)
        console.log(err);
        next(err)
    }
}


const getUser = async (req, res, next) => {

    try {
        
        const user = await User.findById(req.params.id);
        console.log(user);
        if (!user) {
            return res.status(404).send('user not found')
        }

        res.status(200).send({
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
        })

    } catch (err) {
        res.status(500)
        console.log(err);
        next(err)
    }
}


module.exports = {updateUser, getUser}