const User = require('../models/User');

const updateUser = async (req, res, next) => {
    
    try {
        console.log(req.body);
    const user = await User.findByIdAndUpdate(req.body.id, req.body.editedUser, {new: true})

    if (!user ) {
        return res.status(404).send('user not found')
    }
    
   res.status(200).send(user)

    } catch (err) {
    console.log(err);
    next(err)
    }
}

module.exports = {
    
    updateUser
    
  }