const express = require("express");
const cors = require("cors");
const { userRouter, infoRouter } = require("./routes");
const { noticeRouter } = require("./routes/notices");
const { morgan, defaultError, errorCatcher } = require("./middlewares");

const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
// app.use("/users", userRouter);
app.use("/info", infoRouter);
app.use("/api/notices", noticeRouter);

app.use("/", defaultError);
app.use("/", errorCatcher);

module.exports = app;
