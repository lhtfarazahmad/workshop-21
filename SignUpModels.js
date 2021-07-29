const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required :true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type:Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)