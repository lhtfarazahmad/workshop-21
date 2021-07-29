const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        email: request.body.email,
        mobile: request.body.mobile,
        password: request.body.password,
        confirmPassword: request.body.confirmPassword
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router