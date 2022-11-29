const auth = require('express').Router()
const { login, register, forgotPassword, resetPassword } = require('../controllers/auth.controller')

// Route auth login
auth.post('/login', login)

// Route auth register
auth.post('/register', register)

// Route auth forgot password
auth.post('/forgotPassword', forgotPassword)

// Route auth reset password
auth.post('/resetPassword', resetPassword)

module.exports = auth
