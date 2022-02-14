const express = require("express");
const router = express.Router();
const { verifyAuthToken } = require("../middleware/helper");

// IMPORT CONTROLLER
const {
  addQuestion,
  getQuestions,
  getSingleQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestionByTag,
} = require("../controllers/questionsController");

// ROUTES
router.route("/ask").post(addQuestion);
router.route("/").get(getQuestions);
router.route("/:searchQuestion").post(getSingleQuestion);
router.route("/:id").delete(deleteQuestion).get(getQuestionById);
router.route("/search/:tag").get(getQuestionByTag);
// router.route(":qid").get(getQuestion).post(askQuestion).delete(deleteQuestion);
// router.route(":qid/answers").get(getQAnswers);
// router.route(":qid/answers/:aid").get(getQAnswer);

module.exports = router;
