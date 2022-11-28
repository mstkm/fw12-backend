const auth = require('express').Router()
const { login, register } = require('../controllers/auth.controller')

// Route auth login
auth.post('/login', login)

// Route auth register
auth.post('/register', register)

module.exports = auth
