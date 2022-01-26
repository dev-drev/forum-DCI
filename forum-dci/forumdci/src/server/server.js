const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
// const { questionsRouter } = require("./routers/questionsRouter");
// const { adminRouter } = require("./routers/adminRouter");

dotenv.config();
const app = express();

//MIDDLEWARES
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MONGOOSE
//
//
//
//

// ROUTES
// app.use("/", indexRouter);
app.use("/users", userRouter);
// app.use("/questions", questionsRouter);
// app.use("/admin", adminRouter);

const PORT = process.env.PORT || 5000;

//ERROR HANDLER
app.use((req, res, next) => {
  const error = new Error("looks like something is broken ");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  if (error) {
    res.status(err.status || 500).json({ error: error });
  }
  next();
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log("Server up and running on port:", PORT);
});
