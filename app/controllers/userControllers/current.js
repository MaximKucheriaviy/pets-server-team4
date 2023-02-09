const { User } = require('../../models/userModel');


const current = async (req, res, next) => {
    try{
        const user = await User.findById(req._id);
        res.json({
            message: 'Information found.',
            email: user.email,
            name:user.name,
            id: user._id,
            phone: user.phone,
            birthday: user.birthday,
            city: user.city,
            avaterURL: user.avatarURL
        })
    }
    catch (err) {
         res.json({
            message: 'Missing header with authorization token',
        
        })
        next(err);
    }
}

module.exports = current