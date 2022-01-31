const Question = require("../models/Question");
const { validationResult } = require("express-validator");

/*add a new user*/
async function addQuestion(req, res, next) {
  console.log("You have a question!");

  /*handle the error*/
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).send(err);
    }
    const { title, language, tags, question } = req.body;

    const response = await Question.create({
      title,
      language,
      question,
      tags,
      date: new Date(),
    });
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function getQuestions(req, res, next) {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (e) {
    next(e);
  }
}

async function getSingleQuestion(req, res, next) {
  const { searchQuestion } = req.params;

  try {
    var questionsReqExp = new RegExp(searchQuestion, "qui");

    const questions = await Question.find({
      title: { questionsReqExp },
    });
    res.status(200).send(questions);
  } catch (e) {
    next(e);
  }
}

module.exports = { addQuestion, getQuestions, getSingleQuestion };
