const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  language: { type: String, required: true },
  tags: [{ type: String, required: true }],
  date: { type: Date },
  likes: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      type: Number,
      default: 0,
    },
  ],
  answers: [
    {
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
      likes: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Question", QuestionSchema);
