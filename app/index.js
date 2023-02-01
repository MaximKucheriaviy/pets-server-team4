const express = require('express');
const cors = require('cors');
const {infoRouter}  = require('./routes');
const {morgan, defaultError, errorCatcher} = require('./middlewares');
const userRouter = require("./routes/userRoutes") 
const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
// app.use("/users", userRouter);
app.use("/user", userRouter);
app.use("/info", infoRouter);
app.use("/", defaultError);
app.use("/", errorCatcher);


module.exports = app;