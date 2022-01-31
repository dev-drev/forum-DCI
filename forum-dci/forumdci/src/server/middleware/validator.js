const { validationResult } = require("express-validator");
const { body } = require("express-validator");

const userRules = [
  body("fullName")
    .notEmpty()
    .withMessage("fullName shouldn't be empty")
    .isLength({ min: 3 })
    .withMessage("fullName should be at least 3 chars."),
  body("userName")
    .notEmpty()
    .withMessage("userName shouldn't be empty")
    .isLength({ min: 3 })
    .withMessage("userName should be at least 3 chars."),
  body("email").isEmail().withMessage("Invalid email"),

  body("password")
    .notEmpty()
    .withMessage("Please enter a value for Password")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters"),
  // .isStrongPassword().withMessage("Please use a strong Password")
  /* body("rePassword")
        .notEmpty()
        .custom((value) => value === body('rePassword'))
        .withMessage('Password and confirm password are not matched.')*/
];

const validateInputs = (rules) => {
  return [
    ...rules,
    (req, res, next) => {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        return next();
      }

      const extractedErrors = [];
      errors
        .array()
        .map((err) => extractedErrors.push({ [err.param]: err.msg }));

      return res.status(422).json({
        errors: extractedErrors,
      });
    },
  ];
};

module.exports = { validateInputs, userRules };
