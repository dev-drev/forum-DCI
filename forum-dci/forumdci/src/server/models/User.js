const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  userName: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },

  avatar: {
    //to store the buffer with our binary image data in the db
    type: String,
  }
  //   questions: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Question",
  //     required: true,
  //   },
});

// UserSchema.pre('save',async function (next) {
//   const user = this;
  
//   if (user.isModified('password')) {
//   user.password = await bcrypt.hash(user.password, 10)
//   }
  
//  next()
// })

module.exports = mongoose.model("User", UserSchema);
