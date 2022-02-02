const User = require('../models/User');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const updateUser = async (req, res, next) => {
    
    // to convert the req.body object into an array so we can loop through it.
    const updates = Object.keys(req.body.editedUser)

    try {
        console.log('edit', req.body);
        
        const user = await User.findById(req.body.id)

        updates.forEach(update => user[update] = req.body[update])

        await user.save()

       
        // const user = await User.findByIdAndUpdate(req.body.id, {
        //     fullName: req.body.editedUser.fullName,
        //     userName: req.body.editedUser.userName,
        //     email: req.body.editedUser.email,
        //     password: req.body.editedUser.password
            
        // })

    
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