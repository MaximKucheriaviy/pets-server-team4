const morgan = require("./morganSetup");
const defaultError = require("./defaultError");
const validator = require("./validator");
const errorCatcher = require("./errorCatcher");
const auth = require("./auth");
const isValidId = require("./isValidId");

module.exports = {
  morgan,
  defaultError,
  validator,
  errorCatcher,
  auth,
  isValidId,
};
