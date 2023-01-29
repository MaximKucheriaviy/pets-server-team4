const morgan = require('./morganSetup');
const defaultError = require('./defaultError');
const validator = require('./validator');
const errorCatcher = require('./errorCatcher');
const auth = require('./auth');
const { petsValidation } = require('./petsValidation');
const fileLoader = require('./fileLoader');

module.exports = {
    morgan,
    defaultError,
    validator,
    errorCatcher,
    auth,
    petsValidation,
    fileLoader,
}