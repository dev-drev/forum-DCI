const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// const {signUpUser} = require("./controllers/userController");
const userRouter = require("./routers/userRouter");
const questionsRouter = require("./routers/questionsRouter");
const adminRouter = require('./routers/adminRouter');

const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

//MONGOOSE
mongoose.connect(process.env.CONNECT_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // useCreateIndex: true,
});

mongoose.connection.on("error", (error) => {
  console.log("Error: ", error);
});

mongoose.connection.once("open", () => {
  console.log(`MongoDB connected`);
});

//MIDDLEWARES
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ROUTES
// app.use("/", indexRouter);
// app.use("/users", userRouter);
// app.use("/questions", questionsRouter);
app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/", questionsRouter);

const PORT = process.env.PORT || 5000;

//ERROR HANDLER
// app.use((req, res, next) => {
//     const error = new Error("looks like something is broken ");
//     error.status = 400;
//     next(error);
// });
//
// app.use((error, req, res, next) => {
//     console.log(error);
//     if (error) {
//         res.status(error.status || 500).json({error: error});
//     }
//     next();
// });
// SERVER LISTENING
app.listen(PORT, () => {
  console.log("Server up and running on port:", PORT);
});
