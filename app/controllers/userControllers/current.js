const { User } = require('../../models');


const current = async (req, res, next) => {
    try{
        const user = await User.findById(req._id);
        res.json({
            message: 'Information found.',
            email: user.email,
            id: user._id,
        })
    }
    catch(err){
        next(err);
    }
}

module.exports = current