const usersRouter = require('express').Router()
const { readAllUsers, readUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller')

usersRouter.get('/', readAllUsers)
usersRouter.get('/:id', readUser)
usersRouter.post('/', createUser)
usersRouter.patch('/', updateUser)
usersRouter.delete('/', deleteUser)

module.exports = usersRouter
