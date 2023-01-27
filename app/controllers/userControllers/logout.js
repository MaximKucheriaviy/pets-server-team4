const { User } = require("../../models");


const logout = async (req, res, next) => {
    try{

        await User.findByIdAndUpdate(req._id, {token: null});
        res.json({
            message: "The user is logged out"
        })
    }
    catch(err){
        next(err);
    }
}

module.exports = logout