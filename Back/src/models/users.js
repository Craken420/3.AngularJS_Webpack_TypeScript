const mongoose = require('mongoose'),
validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true,
        validate: value => {
            if ( !validator.isEmail(value) )
                throw new Error({error: 'Invalid Error Email address'})
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User