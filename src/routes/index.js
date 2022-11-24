const routes = require('express').Router()

routes.use('/users', require('./users.router'))
routes.use('/users/:id', require('./users.router'))

module.exports = routes
