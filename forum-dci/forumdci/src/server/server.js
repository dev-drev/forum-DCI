const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');
// const {signUpUser} = require("./controllers/userController");
const userRouter = require("./routers/userRouter");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

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
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//MONGOOSE
/*const connectDB = async (next) => {
    try {
        const conn = await mongoose.connect(process.env.CONNECT_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB connected: ${conn}`)
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit();
    } finally {
        next()
    }
}*/

// app.use(connectDB);

// ROUTES
// app.use("/", indexRouter);
// app.use("/users", userRouter);
// app.use("/questions", questionsRouter);
// app.use("/admin", adminRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 5000;

//ERROR HANDLER
app.use((req, res, next) => {
  const error = new Error("looks like something is broken ");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  if (error) {
    res.status(err.status || 500).json({ error: error });
  }
  next();
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log("Server up and running on port:", PORT);
});
