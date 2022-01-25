const mongoose = require("mongoose");

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
  //   questions: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Question",
  //     required: true,
  //   },
});

module.exports = mongoose.model("User", UserSchema);
