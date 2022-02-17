const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  desc: {
    type: String,
    minLength: 7,
    maxLength: 400,
  },
  likes: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.model("Answer", AnswerSchema);
