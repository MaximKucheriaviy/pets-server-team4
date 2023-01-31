const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
})

const User = model('users', userSchema);

module.exports = User;