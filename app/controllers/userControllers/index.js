const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const {chageUserName, chageUserEmail, chageUserPhone, chageUserBirthday, chageUserCity, chageUserAvatart} = require("./changeInfo");

module.exports = {
    signup,
    login,
    logout,
    current,
    chageUserName,
    chageUserEmail,
    chageUserPhone,
    chageUserBirthday,
    chageUserCity,
    chageUserAvatart
};