const Question = require("../models/Question");
const { validationResult } = require("express-validator");

/*add a new user*/
async function addQuestion(req, res, next) {
  console.log("You have a question!");
  const date = new Date();
  const formatDate = new Intl.DateTimeFormat("en-US").format(date);

  /*handle the error*/
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).send(err);
    }
    const { title, language, tags, question, likes } = req.body;
    const tagsSplitted = tags.split(" ");
    console.log(tagsSplitted);
    const response = await Question.create({
      title,
      language,
      question,
      tagsSplitted,
      likes,
      date: formatDate,
    });
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function getQuestions(req, res, next) {
  try {
    const questions = await Question.find().sort();
    res.status(200).send(questions);
  } catch (e) {
    next(e);
  }
}

async function getSingleQuestion(req, res, next) {
  const { searchQuestion } = req.params;

  try {
    var questionsReqExp = new RegExp(searchQuestion, "gi");
    const questions = await Question.find({
      title: questionsReqExp,
    });
    console.log(questions);
    res.status(200).send(questions);
  } catch (e) {
    next(e);
  }
}

async function getQuestionById(req, res, next) {
  const { id } = req.params;

  try {
    const questions = await Question.findById(id);
    console.log(questions);
    res.status(200).send(questions);
  } catch (e) {
    next(e);
  }
}

const deleteQuestion = async (req, res, next) => {
  const deleteQuestion = await Question.findByIdAndDelete(req.params.id);
  if (!deleteQuestion) {
    res
      .status(404)
      .send({ message: "Unable to delete question, please check " });
  } else {
    res.status(200).send({ message: "Question deleted successfully" });
  }
};

// async function deleteQuestion(req, res, next) {
//   const searchQuestion = req.params.id;

//   try {
//   var questionsReqExp = new RegExp(searchQuestion, "gi");

//   const questions = await Question.findByIdAndDelete({
//      _id: { searchQuestion },
//     });
//     res.status(200).send(questions);
//   } catch (e) {
//     next(e);
//   }
// }

module.exports = {
  addQuestion,
  getQuestions,
  getQuestionById,
  getSingleQuestion,
  deleteQuestion,
  // deleteQuestion,
};
