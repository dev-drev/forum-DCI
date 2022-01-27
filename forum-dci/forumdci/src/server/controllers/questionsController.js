const Question = require('../models/Question');
const {validationResult} = require('express-validator');

/*add a new user*/
async function addQuestion(req, res, next) {
    console.log("You have a question!");

    /*handle the error*/
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).send(err);
        }

        const {title, language, tags, question} = req.body;

        const response = await Question.create({
            title,
            language,
            question,
            tags,
            date: new Date()
        })
        res.status(200).send(response);

    } catch (err) {
        console.log(err);
        next(err);
    }

}

module.exports = {addQuestion}