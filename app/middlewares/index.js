const morgan = require("./morganSetup");
const defaultError = require("./defaultError");
const validator = require("./validator");
const errorCatcher = require("./errorCatcher");
const auth = require("./auth");
const { petsValidation } = require("./petsValidation");
const fileLoader = require("./fileLoader");
const isValidId = require("./isValidId");
const isValidPetId = require("./isValidPetId");
const authPet = require("./authPet");
const validation = require("./validator");
const validateBody = require("./validateBody");

module.exports = {
  morgan,
  defaultError,
  validator,
  errorCatcher,
  auth,
  validation,
  petsValidation,
  fileLoader,
  isValidId,
  isValidPetId,
  authPet,
  validateBody,
};
