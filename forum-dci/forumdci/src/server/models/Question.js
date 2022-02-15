const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  language: { type: String, required: true },
  tags: [{ type: String, required: true }],
  date: { type: Date },
  userName: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.model("Question", QuestionSchema);
