const User = require("../models/User");
const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
//const { sign, verify } = require("jsonwebtoken");
const { validateToken } = require("../JWT");
const jwt = require("jsonwebtoken");
const multer = require("multer");
//comment

// ---------delete a User------------------------


async function deleteUser(req, res, next) {
  //to extract token out of cookie

  try {
    const token = req.cookie["access_token"];
    // console.log("hello", token);
    //extract payload of token
    const token_payload = jwt.verify(token, "avazsecrettoken1010");
    console.log(token_payload);
    const deletedUser = await User.findByIdAndDelete(token_payload.id);
    console.log(deletedUser);
    //if (deletedUser) {
    res.status(200).send({ deletedUser, msg: "User deleted successfully!" });
    // }
  } catch (err) {
    console.log(err);

    next(err);
  }
}




const updateUser = async (req, res, next) => {
    
    // to convert the req.body object into an array so we can loop through it.
    // const updates = Object.keys(req.body.editedUser)

    try {
        console.log('edit', req.body);
        
        // const user = await User.findById(req.body.id)

        // updates.forEach(update => user[update] = req.body[update])

        // await user.save()

       
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

 
    // res.status(200).send(user);
  
};

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

};

//file upload / multer profile pic

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'userPics');
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split("/")[1]
        cb(null, `image-${Date.now()}.${extension}`)
    }
});

const isPic = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new Error('only image is allowed'))
    }
}

const upload = multer({
   limits: {
    fileSize: 1000000
    },
    storage: multerConfig,
    fileFilter: isPic
})


//middleware

const uploadPictureMiddleware = upload.single('photo');

// upload picture handler

const uploadPicture = async (req, res, next) => {

     try {
        // res.status(200).send("success")
        console.log(req.file.filename);
        
        const user = await User.findByIdAndUpdate(req.body.id, {avatar: req.file.filename}, {returnDocuments: "after", })
        console.log(user);
        if (!user) {
          return  res.status(403).send('Wrong user ID')
        }
        res.status(200).send('successfully updated')
        // console.log(req.file);

       
    } catch (err) {
        res.status(500)
        console.log(err);
        next(err)

    }

};

module.exports = { updateUser, getUser, deleteUser, uploadPicture, uploadPictureMiddleware };

