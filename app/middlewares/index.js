const morgan = require('./morganSetup');
const defaultError = require('./defaultError');
const validator = require('./validator');
const errorCatcher = require('./errorCatcher');
const auth = require('./auth');
const validation = require("./validator");



module.exports = {
    morgan,
    defaultError,
    validator,
    errorCatcher,
    auth,
    validation
}