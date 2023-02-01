const morgan = require('./morganSetup');
const defaultError = require('./defaultError');
const validator = require('./validator');
const errorCatcher = require('./errorCatcher');
const auth = require('./auth');
const { petsValidation } = require('./petsValidation');
const fileLoader = require('./fileLoader');
const isValidId = require("./isValidId");
const validation = require("./validator");



module.exports = {
    morgan,
    defaultError,
    validator,
    errorCatcher,
    auth,
    validation
    petsValidation,
    fileLoader,
  isValidId,
};