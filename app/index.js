const express = require('express');
const cors = require('cors');
const { userRouter, infoRouter, petRouter } = require('./routes');
const {morgan, defaultError, errorCatcher} = require('./middlewares');

const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/pets", petRouter);
app.use("/info", infoRouter);
app.use("/", defaultError);
app.use("/", errorCatcher);


module.exports = app;